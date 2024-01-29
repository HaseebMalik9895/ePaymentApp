import {
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Appheader} from '../../../components/Appheader/Appheader';
import Modal from 'react-native-modal';

const Data = [
  {
    id: 0,
    image: require('../../../assets/images/QRcode.png'),
    text: 'Junaedi',
    text1: 'QR Payment',
    text2: '5 july 2023',
    text3: 'RS:7500.00',
    text4: 'Success',
    color: 'black',
  },
  {
    id: 1,
    image: require('../../../assets/images/arrow1.png'),
    text: 'Junaedi',
    text1: 'Bank transfer',
    text2: '5 july 2023',
    text3: 'RS:5764.00',
    text4: 'Success',
    color: 'orange',
  },
  {
    id: 2,
    image: require('../../../assets/images/arrow2.png'),
    text: 'Junaedi',
    text1: 'Top Up',
    text2: '5 july 2023',
    text3: 'RS:643.00',
    text4: 'Success',
    color: '#2176AE',
  },
  {
    id: 3,
    image: require('../../../assets/images/wallet.png'),
    text: 'Junaedi',
    text1: 'Send to friend',
    text2: '5 july 2023',
    text3: 'RS:378.00',
    text4: 'Success',
    color: 'purple',
  },
  {
    id: 4,
    image: require('../../../assets/images/arrow1.png'),
    text: 'Junaedi',
    text1: 'Bank Transfer',
    text2: '5 july 2023',
    text3: 'RS:77654.00',
    text4: 'Success',
    color: 'orange',
  },
  {
    id: 5,
    image: require('../../../assets/images/QRcode.png'),
    text: 'Junaedi',
    text1: 'QR payment',
    text2: '5 july 2023',
    text3: 'RS:6653.50',
    text4: 'black',
  },
  {
    id: 6,
    image: require('../../../assets/images/arrow2.png'),
    text: 'Junaedi',
    text1: 'Top Up',
    text2: '5 july 2023',
    text3: 'RS:1000.00',
    text4: 'Success',
    color: '#2176AE',
  },
  {
    id: 7,
    image: require('../../../assets/images/wallet.png'),
    text: 'Junaedi',
    text1: 'Send to friend',
    text2: '5 july 2023',
    text3: 'RS:1500.00',
    text4: 'Success',
    color: 'purple',
  },
  {
    id: 8,
    image: require('../../../assets/images/wallet.png'),
    text: 'Junaedi',
    text1: 'Send to friend',
    text2: '5 july 2023',
    text3: 'RS:340.00',
    text4: 'Success',
    color: 'purple',
  },
];

const History = () => {
  const [modal, setModal] = useState('manu');

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appheader title={'Transaction History'} />
      <View
        style={{
          backgroundColor: '#F54D4D',
          width: '100%',
          height: '8%',
          paddingHorizontal: 10,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: 40,
            width: 340,
            borderRadius: 10,
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../../../assets/images/searchicon.png')}
            resizeMode="contain"
            style={{
              height: 24,
              width: 24,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
          />

          <TextInput
            placeholder="Search"
            style={{
              width: 300,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'white',
            }}
          />
        </View>
        <TouchableOpacity onPress={() => setModal(!modal)}>
          <Image
            source={require('../../../assets/images/bar.png')}
            resizeMode="contain"
            style={{
              height: 30,
              width: 28,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 8,
              marginTop: 8,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginBottom: 130,
        }}>
        <FlatList
          data={Data}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: 104,
                    width: 370,
                    marginVertical: 8,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    elevation: 4,
                  }}>
                  <View
                    style={{
                      height: 80,
                      width: 250,
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                    }}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        height: 24,
                        width: 24,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          paddingHorizontal: 10,
                          alignItems: 'center',
                          fontWeight: 'bold',
                        }}>
                        {item.text}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          paddingHorizontal: 10,
                          alignItems: 'center',
                          marginVertical: 5,
                        }}>
                        {item.text1}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          paddingHorizontal: 10,
                          alignItems: 'center',
                        }}>
                        {item.text2}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 80,
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          paddingHorizontal: 10,
                          alignItems: 'center',
                          marginVertical: 5,
                          color: item.color,
                        }}>
                        {item.text3}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#3FC18B',
                          paddingHorizontal: 25,
                          alignItems: 'center',
                        }}>
                        {item.text4}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      {modal && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 120,
            marginLeft: 70,
          }}>
          <View
            style={{
              height: 100,
              width: 300,
            }}>
            <View
              style={{
                height: 200,
                width: 150,
                left: '68%',
                borderBottomLeftRadius: 10,
                backgroundColor: '#F54D4D',
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: '99%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginLeft: 10,
                  }}>
                  QR Payment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: '99%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginLeft: 10,
                  }}>
                  Bank transfer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: '99%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginLeft: 10,
                  }}>
                  Top Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: '99%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginLeft: 10,
                  }}>
                  Send to friend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default History;
