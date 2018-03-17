import React, { Component } from 'react';
import Chart from './components/Chart';

const API_URL = 'https://nataliia-radina.github.io/react-vis-example/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(response =>
        this.setState({
          results: response.results.filter(r => {
            return r.name === 'PHP';
          }),
        }),
      );
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">React Vis</h1>
              <p className="subtitle">Visualize your data using React-Vis</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div class="card">
              <div class="card-content">
                <Chart data={results} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
