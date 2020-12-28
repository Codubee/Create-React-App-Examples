import React from 'react'
import data from './Data.json'
import {Card,CardBody,CardTitle,CardText} from 'reactstrap'

class JsonData extends React.Component {

    constructor(props) {
        super(props)
        console.log(data);
    }

    render() {
        return (
            <div class = "container">
                {data.map((person, index) => (
                    <div key={index}>
                    <Card>
                      <CardBody>
                        <CardTitle tag="h5">{person.personal_data.name}</CardTitle>
                        <CardText>
                            Age: {person.personal_data.age}
                            Job: {person.occupation.job}
                            Salary: {person.occupation.salary}
                        </CardText>
                      </CardBody>
                    </Card>
                    <br></br>
                  </div>
                  
                ))}
            </div>
        )
    }
}

export default JsonData;