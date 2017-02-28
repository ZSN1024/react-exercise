/**
 * Created by oker on 2017/2/28.
 */
import React from 'react';
const update = require('react-addons-update');

export default class Job extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (i)=> {
        let arr = update(this.props.selected, {[i]: {$apply:x=>!x}});
        this.props.updateState(this.props.index,arr);
    };

    render() {
        return (
            <ul className="job-list">
                {
                    this.props.jobLists.map((ele,i)=>(
                        <li key={i}>
                            <input type="checkbox" checked={this.props.selected&&this.props.selected[i]?true:false} onChange={()=>this.handleClick(i)}/>
                            <span className="job-name">{ele.jobName}</span>
                            <span className="job-num">{ele.num}</span>
                        </li>
                    ))
                }
            </ul>
        );
    }
}
