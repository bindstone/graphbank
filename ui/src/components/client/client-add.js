import React from 'react';
import {Modal} from "semantic-ui-react";
import {addClient} from "../../queries/client-query";

class ClientAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModal: true};
    }

    action = () => {
        return (
            <React.Fragment>
                <button className="ui primary button" onClick={this.doClose}>Close</button>
            </React.Fragment>
        );
    };

    popup = () => {
        console.log(this.state.showModal);
        return (
            <Modal open={this.state.showModal}>
                <div className="header">Title</div>
                <div className="content">Content</div>
                <div className="actions">{this.action()}</div>
            </Modal>
        );
    };


    doSubmit = (formValues) => {
        this.setState({showModal: true});
    };

    doClose = () => {
        this.setState({showModal: false});
    };

    render() {
        return (
            <Mutation mutation={addClient}>
                {(addTodo, {data}) => (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                addTodo({variables: {type: input.value}});
                                input.value = "";
                            }}>
                            <input ref={node => {
                                input = node;
                            }}/>
                            <button type="submit">Add Todo</button>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    };
}

const validate = formValues => {
    const error = {};

    if (!formValues.name) {
        error.name = "Name not specified";
    }
    return error;
};

export default reduxForm({form: 'admissionForm', validate: validate})(ClientAdd);
