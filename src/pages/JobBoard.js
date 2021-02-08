import React, { Component } from 'react'
import { Header, Segment, Grid, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { initialFetch } from '../redux/adapters/jobBoardAdapters'
import { getJobList } from "../redux/adapters/jobListAdapters";
import SourceCard from '../components/SourceCard'
import '../assents/css/JobBoard.css'


class JobBoard extends Component {

    componentDidMount(){
        if(this.props.jobBoard.length == 0){
            this.props.initialFetch()
        } 
    }

    directToJobList = (companyName) => {
        this.props.getJobList({companyName: companyName, page: 1})
        this.props.history.push(`job_list/${companyName}`)
    }

    genSourceCards = () => {
        return this.props.jobBoard.map(board => 
        <SourceCard key={board.name} rating={board.rating} 
        rootDomain={board.root_domain} logoFile={board.logo_file}
        description={board.description} name={board.name}
        getCompanyName={this.directToJobList} />)
    }

    render(){
        if (this.props.jobBoard.length == 0) {
            return(
                <div>
                    <Grid padded>
                        <Segment textAlign='left' className='transparent'>
                            <Header as='h1' >Job Sources</Header>
                        </Segment>
                    </Grid>
                    
                    <Grid textAlign='center' verticalAlign='middle' stretched padded>
                        <Dimmer active inverted>
                            <Loader inverted>Loading ...</Loader>
                        </Dimmer>
                    </Grid>
                </div>
            )
        }
        return(
            <div>
                <Grid padded>
                    <Segment textAlign='left' className='transparent'>
                        <Header as='h1' >Job Sources</Header>
                    </Segment>
                </Grid>
                
                <Grid columns={3} padded textAlign='left'>
                    {this.genSourceCards()}
                </Grid>
            </div>
        )
    }



}

const mapStateToProps = state => {
    return {
        jobBoard: state.jobBoard.jobBoards
    }
  }
  
  const mapDispatchToProps = {
    initialFetch : initialFetch,
    getJobList : getJobList
  }

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(withRouter(JobBoard));
