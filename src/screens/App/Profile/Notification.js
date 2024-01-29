import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Appheader} from '../../../components/Appheader/Appheader';

const setting = [
  {id: 0, name: 'Push Notifications'},
  {id: 1, name: 'Notifications Sound'},
  {id: 2, name: 'Wallet Updates'},
  {id: 3, name: 'Promotion'},
];
const Notification = ({navigation}) => {
  const [botton, setBotton] = useState(null);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appheader
        onPress={() => navigation.navigate('Profile')}
        title={'Notification Setting'}
        backarrow={true}
      />
      <FlatList
        data={setting}
        renderItem={({item}) => {
          return (
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  borderBottomWidth: 0.3,
                  borderColor: 'grey',
                }}>
                <View
                  style={{
                    width: '80%',
                    height: 50,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    height: 48,
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setBotton(perState => (perState === item ? null : item));
                    }}
                    style={{
                      width: 60,
                      backgroundColor: 'green',
                      borderRadius: 20,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor:
                          botton?.id === item?.id ? 'white' : 'green',
                        borderRadius: 20,
                      }}></View>
                    <View
                      style={{
                        width: 30,
                        backgroundColor:
                          botton?.id === item?.id ? 'green' : 'white',
                        height: 30,
                        borderRadius: 20,
                      }}></View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      {/* <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '80%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Push Notifications
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 60,
                backgroundColor: 'green',
                height: 30,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity 
                onPress={() => setBotton((perState)=> perState === item)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'white' : 'green',
                  borderRadius: 20,
                }}></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'green' : 'white',
                  borderRadius: 20,
                }}></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '80%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Notification Sound
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 60,
                backgroundColor: 'green',
                height: 30,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'white' : 'green',
                  borderRadius: 20,
                }}></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'green' : 'white',
                  borderRadius: 20,
                }}></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '80%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Wallet Updates
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 60,
                backgroundColor: 'green',
                height: 30,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'white' : 'green',
                  borderRadius: 20,
                }}></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'green' : 'white',
                  borderRadius: 20,
                }}></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '80%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Promotions
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 60,
                backgroundColor: 'green',
                height: 30,
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'white' : 'green',
                  borderRadius: 20,
                }}></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBotton(!botton)}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: botton ? 'green' : 'white',
                  borderRadius: 20,
                }}></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Notification;
