import React, { Component } from 'react'
import { Grid, Card, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'


class SourceCard extends Component {

    handleClick = (event) => {
        this.props.getCompanyName(event.currentTarget.name)
    }

    ratingColor = (rating) => {
        if(rating == "Great"){
            return "green"
        } else if (rating == "Good") {
            return "yellow"
        } else if (rating == "Okay"){
            return "red"
        }
    }

    render(){
        return (
            <Grid.Column textAlign='center'>
                <Card fluid onClick={this.handleClick} name={this.props.name}>
                    <Card.Content>
                        
                        <Grid columns={4}>
                            <Grid.Column width={6}>
                                <Image
                                    floated='left'
                                    size='small'
                                    src={this.props.logoFile}
                                />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Header as='h5' color={this.ratingColor(this.props.rating)} textAlign='right'>{this.props.rating}</Header>
                                <Card.Description textAlign='left'>
                                    {this.props.description}
                                </Card.Description>
                            </Grid.Column>
                        </Grid>
                        
                        
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

export default connect(
    null,
    null
)(SourceCard);