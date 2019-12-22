import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';

import Note from './Note';
export default class Main extends React.Component{

    constructor(props){
        super(props);
        this.state={
            noteArray:[],
            noteText:'',
        }
    }


    render(){

        let notes = this.state.noteArray.map((val,key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={ ()=> this.deleteNote(key) } />
        });

        return (
            <View style={styles.container}>

                <View style={styles.header} >
                    <Text style={styles.headerText}>Alışveriş Listesi</Text>
                   
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText)=>this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='Hatırlatmanızı yazınız ...'
                        placeholderTextColor='#dddddd'
                        underlineColorAndroid='transparent'>

                    </TextInput>
                        
                    <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                        <Image style={{width: 40, height: 40}} source={require('../img/send.png')} />    
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

    addNote(){
        
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getDate() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getFullYear()+
                "   " + d.getHours()+
                ":" + d.getMinutes(),
                'note':this.state.noteText,

            });
            this.setState({noteArray:this.state.noteArray})
            this.setState({noteText:''});
        }

    }

    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray})
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc',
    },
    header:{
        backgroundColor:'#0D47A1',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    headerText:{
        color:'white',
        fontSize:18,
        padding:20,
        textAlign:'left',
    },
    scrollContainer:{
        flex:1,
        backgroundColor:'#ccc',
        marginBottom:100,
    },
    footer:{
        position:'absolute',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginBottom:0,
        bottom:0,
        right:0,
        left:0,
        zIndex:10,
    },
    textInput:{
        flex:5,
        color:'#fff',
        padding:20,
        fontSize:18,
        bottom:0,
        height:90,
        zIndex:11,
        backgroundColor:'#252525',
    },
    addButton:{
        flex:1,
        zIndex:11,
        right:0,
        bottom:0,
        paddingRight:10,
        backgroundColor:'#252525',
        height:90,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
    },
    addButtonText:{
        width:20,
    },
});


