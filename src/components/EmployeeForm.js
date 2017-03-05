import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common';


class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input label="Name"
                           placeholder="Jane"
                           value={this.props.name}
                           onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}/>
                </CardSection>

                <CardSection>
                    <Input label="Phone"
                           placeholder="555-5555-5555"
                           value={this.props.phone}
                           onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}/>
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}>
                        <Picker.Item label="Δευτέρα" value="Monday"/>
                        <Picker.Item label="Τρίτη" value="Tuesday"/>
                        <Picker.Item label="Τετάρτη" value="Wednesday"/>
                        <Picker.Item label="Πέμπτη" value="Thursday"/>
                        <Picker.Item label="Παρασκεύη" value="Friday"/>
                        <Picker.Item label="Σάββατο" value="Saturday"/>
                        <Picker.Item label="Κυριακή" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>

        );
    };
}

const styles = {
    pickerTextStyle: {
        fontSize   : 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);