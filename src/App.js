import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class App extends Component {

    constructor() {
        super();
        this.state = {
            bank: 'Zenith',
            variable: 'Price'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleVariableChange = this.handleVariableChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = (target.type === "checkbox") ? target.checked : target.value;

        this.setState({
            bank: value
        })
    }

    handleVariableChange(event){
        const target = event.target;
        const value = target.value;

        this.setState({
            variable: value
        })
    }


    render() {
        const data = {
            "Zenith": [
                {
                    Date: "31-May-2017",
                    Price:  18.95,
                    NoDivAdj: 0
                },
                {
                    Date: "1-Jun-2017",
                    Price: 19.5,
                    NoDivAdj: 2.90
                },
                {
                    Date: "2-Jun-2017",
                    Price: 19.99,
                    NoDivAdj: 2.51
                },
                {
                    Date: "5-Jun-2017",
                    Price: 20.18,
                    NoDivAdj: 0.95
                },
                {
                    Date: "6-Jun-2017",
                    Price: 20.15,
                    NoDivAdj: -0.15
                },{
                    Date: "7-Jun-2017",
                    Price: 19.99,
                    NoDivAdj: -0.79
                },{
                    Date: "8-Jun-2017",
                    Price: 20.46,
                    NoDivAdj: 2.35
                },{
                    Date: "9-Jun-2017",
                    Price: 20.7,
                    NoDivAdj: 1.17
                },
                {
                    Date: "12-Jun-2017",
                    Price: 20.64,
                    NoDivAdj: -0.29
                },
                {
                    Date: "13-Jun-2017",
                    Price: 20.85,
                    NoDivAdj: 1.02
                },{
                    Date: "14-Jun-2017",
                    Price: 20.89,
                    NoDivAdj: 4.99
                },{
                    Date: "15-Jun-2017",
                    Price: 22.9,
                    NoDivAdj: 4.61
                },
                {
                    Date: "16-Jun-2017",
                    Price: 22.89,
                    NoDivAdj: -0.04
                },
                {
                    Date: "19-Jun-2017",
                    Price: 22.5,
                    NoDivAdj: -1.7
                },{
                    Date: "20-Jun-2017",
                    Price: 22.08,
                    NoDivAdj: -1.87
                },{
                    Date: "21-Jun-2017",
                    Price: 21.2,
                    NoDivAdj: -3.99
                },{
                    Date: "22-Jun-2017",
                    Price: 20.43,
                    NoDivAdj: -3.63
                },{
                    Date: "23-Jun-2017",
                    Price: 20.33,
                    NoDivAdj: -0/49
                },{
                    Date: "28-Jun-2017",
                    Price: 20.59,
                    NoDivAdj: 1.23
                },{
                    Date: "29-Jun-2017",
                    Price: 20.9,
                    NoDivAdj: 1.55
                },{
                    Date: "30-Jun-2017",
                    Price: 20.89,
                    NoDivAdj: -0.05
                },
            ],
            "Diamond": [
                {}
            ]
        }

        return (
            <div>
                <h1>{this.state.bank} closing price</h1>

                <LineChart width={600} height={300} data={data[this.state.bank]}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="Date"/>
                    <YAxis dataKey={this.state.variable}/>
                    <CartesianGrid stroke="#ccc"/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{r: 8}}/>
                    {/*<Line type="monotone" dataKey="volume" stroke="#82ca9d"/>*/}
                </LineChart>

                <select onChange={this.handleInputChange}>
                    {
                        Object.keys(data).map(key => {
                            return <option value={key}>{key}</option>
                        })
                    }
                </select>

                <select onChange={this.handleVariableChange}>
                    <option value='Price'>Price</option>
                    <option value='NoDivAdj'>NoDivAdj</option>
                </select>


            </div>
        );
    }
}

export default App;
