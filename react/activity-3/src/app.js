import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import { BarChar, XAxis, YAxis, CatesianGrid, Tooltip, Bar } from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup } from

    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                xVariable: 'Year',
            }
        }

        updateXVar(d) {
            this.setState({
                xVariable = d
            })
        }

        // after rendering is done
        componentDidMount() {
            // d3.csv will take two params -> 1. err 2. data
            d3.csv('data/medalists.csv', (err, data) => {
                this.setState({
                    data: data
                })
            });
        }

        render() {
            let numRows = this.state.data.length;
            let charData = d3.nest()
                .key((d) => d[this.state.xVariable])
                .rollup((d) => d.length)
                .entries(this.state.data);
            return (
                <div>
                    <BarChart width={600} height={300} data={charData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }} />
                    <XAxis dataKey="key" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />

                </div>
            );
        }
    }


export default App