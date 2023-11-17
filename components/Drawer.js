import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Icon from './Icon';
import materialTheme from '../constants/Theme';

const proScreens = [
    'Home',
    'Profile',
    'Settings',
    'Components',
];

const DrawerItem = ({ title, focused, navigation }) => {
    const renderIcon = () => {
        switch(title){
            case 'Home':
                return(
                    <Icon
                        name='shop'
                        family='GalioExtra'
                        size={16}
                        color={focused ? 'white' : materialTheme.COLORS.MUTED}
                    />
                );
            case 'Profile':
                return(
                    <Icon
                        name='circle-10'
                        family='GalioExtra'
                        size={16}
                        color={focused ? 'white' : materialTheme.COLORS.MUTED}
                    />
                );
            case 'Settings':
                return(
                    <Icon
                        name='gears'
                        family='font-awesome'
                        size={16}
                        color={focused ? 'white' : materialTheme.COLORS.MUTED}
                    />
                );
            case 'Components':
                return(
                    <Icon
                        name='md-switch'
                        family='ionicon'
                        size={16}
                        color={focused ? 'white' : materialTheme.COLORS.MUTED}
                    />
                );
            default:
                return null;
        }
    };
    const renderLabel = () => {
        if(proScreens.includes(title)){
            return(
                <Block middle style={styles.pro}>
                    <Text size={12} color='white'>PRO</Text>
                </Block>
            );
        }
        return null;
    };

    return(
        <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => navigation.navigate(title)}
      >
        <Block
          flex
          row
          style={[
            styles.defaultStyle,
            focused ? [styles.activeStyle, styles.shadow] : null
          ]}
        >
          <Block middle flex={0.1} style={{ marginRight: 28 }}>
            {renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={18}
              color={
                focused ? 'white' : materialTheme.COLORS.MUTED
              }
            >
              {title}
            </Text>
            {renderLabel()}
          </Block>
        </Block>
      </TouchableOpacity>
    );
};

export default DrawerItem;

const styles = StyleSheet.create({
    defaultStyle: {
      paddingVertical: 16,
      paddingHorizontal: 16
    },
    activeStyle: {
      backgroundColor: materialTheme.COLORS.ACTIVE,
      borderRadius: 4
    },
    shadow: {
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 8,
      shadowOpacity: 0.2
    },
    pro: {
      backgroundColor: materialTheme.COLORS.LABEL,
      paddingHorizontal: 6,
      marginLeft: 8,
      borderRadius: 2,
      height: 16,
      width: 36
    }
  });  