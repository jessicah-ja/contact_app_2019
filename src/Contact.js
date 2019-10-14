import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component{
    constructor(props) {  //constructor를 쓸때는 super를 같이 써줘야함. //state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정
        super(props);
        this.state = {
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            },{
                name: 'Betty',
                phone: '010-0000-0002'
            },{
                name: 'Charlie',
                phone: '010-0000-0003'
            },{
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        this.handleChange = this.handleChange.bind(this); //메소드를 만들어줄땐 this와 binding

    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            )
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>);
            });
        }; //render

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword" 
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }

}