import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component{

    constructor(props) {
        super(props);
          this.state = {
            bgColor: [
              '#D84315',
              '#F9A825',
              '#2E7D32',
              '#1565C0',
              '#009688',
              '#3F51B5',
              '#607D8B',
              '#d50000',
              '#9C27B0',
            ],
            selectedColor: '',
          };
        }
        
        
        componentDidMount() {
          this._getRandomColor()
        }
        
        _getRandomColor(){
          var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
          this.setState({
            selectedColor: item,
          })
        }
        

    render(){
        return (
            <View key={this.props.keyval} style={{backgroundColor: this.state.selectedColor , 
                position:'relative',
                paddingTop:20,
                paddingBottom:20,
                paddingLeft:5,
                paddingTop:20,
                paddingRight:100,
                marginLeft:10,
                marginRight:10,
                marginBottom:5,
                marginTop:10,
            }}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    
                    <Image style={{width: 40,
                         height: 40,
                    
                    }} source={require('../img/trash.png')} />    

                </TouchableOpacity>
            </View>

        );
    }
}

const styles =StyleSheet.create({
   
    noteText:{
        paddingLeft:20,
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:10,
        paddingLeft:10,
        top:0,
        bottom:0,
        right:0,
    },
    noteDeleteText:{
        color:'#b71c1c',
        fontSize:22,
        fontWeight:'bold',
    },
});