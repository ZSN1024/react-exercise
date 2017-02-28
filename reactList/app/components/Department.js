/**
 * Created by oker on 2017/2/28.
 */
import React from 'react';
import Job from 'components/Job'
const update = require('react-addons-update');

export default class Department extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = (index)=> {
        let arr = this.props.checked[index];
        let allChecked = arr&&arr.every(x=>x);
        for (let i=0; i<arr.length; i++) {
            arr[i] = !allChecked;
        }
        this.props.updateState(index,arr);
    };

    render() {
        return (
            <div>
                {
                    this.props.items.map((item,index)=>{
                        let childArrs = this.props.checked[index];
                        return (
                            <div key={index} className="department">
                                <p>

                                    <input type="checkbox" checked={childArrs.length>0 && childArrs.every(x=>x) ? true : false} onChange={()=>this.handleClick(index)}/>
                                    <span className="department-name">{item.department}</span>
                                    <span className="total-num">{item.total}</span>
                                </p>
                                <Job jobLists={item.jobList}
                                     index={index}
                                     selected={childArrs}
                                     updateState={this.props.updateState}

                                />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
