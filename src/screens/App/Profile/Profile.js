import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 170,
          width: '100%',
          backgroundColor: '#F54D4D',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/images/MainProfile.png')}
          resizeMode="contain"
          style={{
            height: 72,
            width: 72,
          }}
        />
        <View
          style={{
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
            }}>
            ARIEF WAHDAN ALFHAT
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 5,
            }}>
            Wahdanalfhat@gmail.com
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
            }}>
            081221447884
          </Text>
          <TouchableOpacity
            style={{
              height: 25,
              width: 105,
              backgroundColor: 'white',
              borderRadius: 20,
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../assets/images/Tick.png')}
              resizeMode="contain"
              style={{
                height: 10,
                width: 10,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                marginLeft: 8,
                color: 'green',
              }}>
              Verified account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, width: '100%'}}>
        <View
          style={{
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'Roboto-Medium',
            }}>
            Account & Security
          </Text>
          <View
            style={{
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AccountSetting')}
              style={{
                height: 45,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  height: 50,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/setting.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Account Settings
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 45,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/refferal.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Refferal
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 45,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/coin.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Coin & Reward
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 45,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/voucher2.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  My Voucher
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')}
              style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 45,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/voucher2.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Notification
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'Roboto-Medium',
            }}>
            General
          </Text>
          <View
            style={{
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                height: 45,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  height: 50,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/file.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Terms & Conditions
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 45,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/privacy.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Privacy Policy
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 45,
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/customerservice.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </View>
              <View
                style={{
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Roboto-Medium',
                    color: 'black',
                  }}>
                  Customer Services
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/Rightarrow.png')}
                  resizeMode="contain"
                  style={{
                    height: 17,
                    width: 14,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AuthStack', {screen: 'Pin'})}
          style={{
            width: 120,
            height: 60,
            flexDirection: 'row',
            borderWidth: 0.3,
            borderColor: 'grey',
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={require('../../../assets/images/logout.png')}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Roboto-Medium',
              paddingHorizontal: 10,
              color: 'black',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
