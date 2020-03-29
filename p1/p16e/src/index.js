import React, {useState}  from 'react';
import ReactDOM from 'react-dom';

const StatisticTableRow = (props) => (
  <tr> 
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const StatisticsTable = (props) => {
  console.log(props.statistics)
  if(props.statistics.allValue === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticTableRow text={props.statistics.goodText} value={props.statistics.goodValue} />
          <StatisticTableRow text={props.statistics.neutralText} value={props.statistics.neutralValue} />
          <StatisticTableRow text={props.statistics.badText} value={props.statistics.badValue} />
          <StatisticTableRow text={props.statistics.allText} value={props.statistics.allValue} />
          <StatisticTableRow text={props.statistics.avrageText} value={props.statistics.avrageValue} />
          <StatisticTableRow text={props.statistics.positiveText} value={props.statistics.positiveValue} />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
  console.log(props.statistics)
  if(props.statistics.allValue === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <Statistic text={props.statistics.goodText} value={props.statistics.goodValue} />
      <Statistic text={props.statistics.neutralText} value={props.statistics.neutralValue} />
      <Statistic text={props.statistics.badText} value={props.statistics.badValue} />
      <Statistic text={props.statistics.allText} value={props.statistics.allValue} />
      <Statistic text={props.statistics.avrageText} value={props.statistics.avrageValue} />
      <Statistic text={props.statistics.positiveText} value={props.statistics.positiveValue} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const statistics = {
    goodText: 'good',
    goodValue: good,
    neutralText: 'neutral',
    neutralValue: neutral,
    badText: 'bad',
    badValue: bad,
    allText: 'all',
    allValue: good + neutral + bad,
    avrageText: 'avrage',
    avrageValue: (good - bad) / (good + neutral + bad),
    positiveText: 'positive',
    positiveValue: (good / (good + neutral + bad) * 100) + '%'
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <br />
      <h1>statistics</h1>
      <StatisticsTable statistics={statistics} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
