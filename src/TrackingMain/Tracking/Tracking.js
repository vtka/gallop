import React from 'react';
import Ionicon from 'react-ionicons';
import moment from 'moment';
// import moment from 'moment/min/moment-with-locales.min.js';
import axios from 'axios';

import 'moment/locale/ru';

import 'bootstrap-4-grid/css/grid.min.css'

import './Tracking.css';

moment.locale('ru')

class Tracking extends React.Component {

  constructor(props) {
    super(props)
    let history = []
    if(typeof window !== "undefined") {
      history = JSON.parse(localStorage.getItem("trackingHistory"))
    }
    if(Array.isArray(history) === true)
      this.state = { loading: false, error: false, code: props.number, waybill: null, history: history }
    else
      this.state = { loading: false, error: false, code: props.number, waybill: null, history: [] }
    if (props.number) {
      this.fetchWaybill(this.state.code)
    }
  }

  fetchWaybill = (code) => {
    const uri = `http://api.gallop.work/public/v1/tracking?waybill=${code}`
    const history = Array.from(new Set([{ code: code, time: new Date() }, ...this.state.history])).slice(0, 5)
    this.setState({ loading: true, history: history })
    if(typeof window !== "undefined") {
      localStorage.setItem("trackingHistory", JSON.stringify(history));
    }
    axios.get(uri).then(res => {
      const json = res.data
      if (json.error !== undefined)
        this.setState({ loading: false, error: true, waybill: null })
      else if (json.waybill !== undefined)
        this.setState({ loading: false, error: false, waybill: json.waybill })
    });
  }

  handleChange = (val) => {
    this.setState({ code: val })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.code !== "")
      this.fetchWaybill(this.state.code)
    this.setState({ code: "" })
  }

  handleSubmitFromHistory = (e, code) => {
    e.preventDefault()
    if (code !== "")
      this.fetchWaybill(code)
    this.setState({ code: "" })
  }

  renderResult = () => {
    const { code, loading, error, waybill } = this.state;
    if (loading !== false)
      return this.renderLoading();
    if (error !== false)
      return this.renderError();
    else if (waybill === null)
      return this.renderInfo();
    else if (waybill !== null)
      return this.renderWaybill();
  }

  renderError = () => (
    <div className="tracking__error-box">
      <Ionicon icon="ios-warning-outline" color="red" fontSize="44px"/>
      <p>Накладная не существует или она еще не зарегистрирована в системе.</p>
      <p>Убедитесь, что номер введен полностью (все цифры и буквы присутствующие в накладной).</p>
      <p>Если номер указан верно, то накладная должна появиться в ближайшее время, как только ее зарегистрируют операторы нашей компании.</p>
    </div>    
  )

  renderLoading = () => (
    <div className="tracking__loading-box">
      <Ionicon icon="ios-sync" rotate color="#00509d" fontSize="44px"/>
    </div>    
  )

  renderInfo = () => (
    <div className="tracking__info-box">
      <Ionicon icon="ios-paper-outline" fontSize="35px"/>
      <h3>Введите номер накладной</h3>
      <p>Введите номер накладной, указанный под штрих-кодом. Указывайте номер полностью, т.е. KSP123456789.</p>
    </div>
  )

  renderWaybill = () => {
    const { waybill } = this.state;
    return (
      <div className="tracking__waybill-box">
        <h2>{waybill.code}</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <dd>Откуда</dd>
            <dt>{waybill.orig_region}</dt>
            <dt>{waybill.orig_address}</dt>
          </div>
          <div className="col-sm-12 col-md-6">
            <dd>Куда</dd>
            <dt>{waybill.dest_region}</dt>
            <dt>{waybill.dest_address}</dt>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <hr />
            {this.renderDeliveryStatus(waybill.deliveries)}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            {this.renderTracks(waybill.parcels[0].tracks)}
          </div>
        </div>
      </div>    
    )
  }

  renderTracks = (tracks) => {
    return(
      <div className="tracking__tracks">
        {tracks.map((track, idx) => <div className="tracking__track" key={idx}>{this.renderTrack(track)}</div>)}
      </div>
    )
  }

  renderTrack = (track) => (
    <div>
      <div className="tracking__track-info">
        <small className="tracking__track-time">{track.created_at}</small>
        <span className="tracking__track-code">
          {track.code}
        </span>
        <p className="tracking__track-description">
          {track.description}
        </p>
      </div>
      <p className="tracking__track-description">
      {track.code == 'ls' && <aside className='aside-text'><small>Указано время регистрации деталей доставки. Фактическое время доставки указано в блоке "Успешная доставка" выше.</small></aside> }
      </p>
    </div>
  )

  renderDeliveryStatus = (deliveries) => {
    if(Array.isArray(deliveries) && deliveries.length > 0) {
      const success = deliveries.filter(delivery => delivery.status === 'success')
      const failure = deliveries.filter(delivery => delivery.status === 'failure')
      if(success.length > 0) {
        return(
          <div>
            <h3 style={{ color: 'green' }}>
              Успешная доставка
            </h3>
            <dd>
              Получил
            </dd>
            <dt>
              {`${success[0].receiver_name} (${success[0].receiver_position})`}
            </dt>
            <dt>
              {moment(success[0].stamp).calendar()}
            </dt>
            <br />
        </div>          
        )
      }
      if (failure.length > 0) {
        return(
          <div>
            <h4>Неудачные попытки доставки</h4>
            {failure.map((f, idx) => <p key={idx}>{idx + 1}) {f.description} <small>{moment(f.stamp).calendar()}</small></p>)}
          </div>
        )
      }
        
    }
    else {
      return (
        <div>
          <h3>
            В пути
          </h3>
          <p>
            Отправление(я) по даннной накладной находятся в пути. Для уточнения деталей смотрите трекинг или свяжитесь с нами по телефону.
          </p>
        </div>
      )  
    }
  }

  renderHistory = () => {
    const { history } = this.state;
    if (history.length > 0) {
      return(
        <div>
          <h3>История запросов</h3>
          { history.map((x, idx) => <p key={idx}><small style={{float: 'right'}}>{moment(x.time).locale('ru').calendar()}</small><a href="#" onClick={(e) => this.handleSubmitFromHistory(e, x.code) }>{x.code}</a></p> ) }
        </div>
      )
    }
  }

  render() {
    return(
      <div className="tracking row">
        <div className="col-md-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                onChange={(x) => this.handleChange(x.target.value)}
                value={this.state.code}
                className="tracking__input form-control"
                placeholder="KSP123456789"
              />
            </div>
          </form>
          <div className="hide-history">
            {this.renderHistory()}
          </div>
        </div>
        <div className="col-md-8">
          {this.renderResult()}
        </div>
      </div>
    )
  }
}

export default Tracking;