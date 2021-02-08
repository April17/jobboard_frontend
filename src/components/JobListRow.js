import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'


class JobListRow extends Component {

    jobURLShortener = (jobURL) =>{
        if(jobURL == null){
            return ""
        } else{
            return jobURL.slice(0,100)
        }
        
    }

    render(){
        return(
            <Table.Row>
                <Table.Cell width={2}>{this.props.ID}</Table.Cell>
                <Table.Cell width={4}>{this.props.companyName}</Table.Cell>
                <Table.Cell width={4}>{this.props.jobTitle}</Table.Cell>
                <Table.Cell width={6} >
                    <a href={this.props.jobURL} target="_blank">
                        {this.jobURLShortener(this.props.jobURL)}
                    </a>
                </Table.Cell>
            </Table.Row>
        )
    }


}



export default connect(
    null,
    null
)(JobListRow);