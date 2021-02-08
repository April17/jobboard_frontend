import React, { Component } from 'react'
import { Header, Segment, Grid, Icon, Menu, Table, Dimmer, Loader } from 'semantic-ui-react'
import JobListRow from '../components/JobListRow'
import { getJobList } from "../redux/adapters/jobListAdapters";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



class JobList extends Component {

    componentDidMount(){
        if(this.props.jobList.jobListRow == null){
            this.props.getJobList({
                companyName: " ", 
                page: 1
            })
        } 
    }

    handleClick = (event) =>{
        console.log(event.currentTarget.dataset.value)
        this.props.getJobList({
            companyName: this.props.jobList.companyName, 
            page: event.currentTarget.dataset.value
        })
    }

    genJobListRow = () => {
        return this.props.jobList.jobListRow.map(row => <JobListRow key={row.id} ID={row.id}
            companyName={row.company_name} jobTitle={row.job_title}
            jobURL={row.job_url} />)
    }

    genPage = () => {
        return this.props.jobList.pagy.series.map((serie, i) => 
        <Menu.Item as='a' key={i} data-value={serie} 
            disabled={serie == "gap"? true : false}
            active={serie == this.props.jobList.pagy.page? true : false}
            onClick={this.handleClick}
        >{serie == "gap"? "..." : serie}</Menu.Item>)
    }

    render(){
        if (this.props.jobList.jobListRow == null) {
            return(
                <div>
                    <Grid padded>
                        <Segment textAlign='left' className='transparent'>
                            <Header as='h1' >Job Sources: {this.props.jobList.companyName}</Header>
                        </Segment>
                    </Grid>
                    
                    <Grid textAlign='left' verticalAlign='middle' stretched padded>
                            <Dimmer active inverted>
                                <Loader inverted>Loading ...</Loader>
                            </Dimmer>
                    </Grid>
                </div>
            )
        }
        if (this.props.jobList.jobListRow.length == 0) {
            return(
                <div>
                    <Grid padded>
                        <Segment textAlign='left' className='transparent'>
                            <Header as='h1' >Job Sources: {this.props.jobList.companyName}</Header>
                        </Segment>
                    </Grid>
                    
                    <Grid textAlign='center' verticalAlign='middle' padded>
                        <Header as='h1' >No Job avliable</Header>
                    </Grid>
                </div>
            )
        }
        return(
            <div>
                <Grid padded>
                    <Segment textAlign='left' className='transparent'>
                        <Header as='h1' >Job Sources: {this.props.jobList.companyName}</Header>
                    </Segment>
                </Grid>
                <Grid columns={3} padded textAlign='left'>
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Company Name</Table.HeaderCell>
                                <Table.HeaderCell>Job Title</Table.HeaderCell>
                                <Table.HeaderCell>Job URL</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                                {this.genJobListRow()}
                        </Table.Body>
                        <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon onClick={this.handleClick} data-value={this.props.jobList.pagy.prev? this.props.jobList.pagy.prev : 1} >
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                        {this.genPage()}
                                    <Menu.Item as='a' icon onClick={this.handleClick} data-value={this.props.jobList.pagy.next? this.props.jobList.pagy.next : 1}>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                        </Table.Footer>
                    </Table>
                </Grid>
            </div>
        )
    }



}

const mapStateToProps = state => {
    return {
        jobList : state.jobList
    }
  }
  
  const mapDispatchToProps = {
    getJobList : getJobList
  }

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(withRouter(JobList));



