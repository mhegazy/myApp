/**
 * Copyright 2016 SunShine
 * 2016-12-21
 */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FooterBar, HeaderBar, ListItem, Dialog, Share } from '../../components';
import * as CONST from '../../CONST';
export class TravelsView extends React.Component {
    constructor(props) {
        super(props);
        /**
         *open dialog
         */
        this.openDialog = () => {
            this.setState({
                dialogIsVisible: true
            });
        };
        /**
         *close dialog
         */
        this.closeDialog = () => {
            this.setState({
                dialogIsVisible: false
            });
        };
        /**
         *openShare
         */
        this.openShare = () => {
            this.setState({
                shareIsVisible: true
            });
        };
        /**
         *close share
         */
        this.closeShare = () => {
            this.setState({
                shareIsVisible: false
            });
        };
        this.state = {
            dialogIsVisible: false,
            shareIsVisible: false
        };
    }
    render() {
        return (React.createElement(View, { style: [styles.container, { width: CONST.WIDTH, height: CONST.HEIGHT }] },
            React.createElement(HeaderBar, { title: '游记列表', navigator: this.props.navigator, onPress: this.openDialog }),
            React.createElement(View, { style: styles.listWrapper },
                React.createElement(ListItem, { share: this.openShare }),
                React.createElement(ListItem, null)),
            React.createElement(Dialog, { isVisible: this.state.dialogIsVisible, closeDialog: this.closeDialog }),
            React.createElement(Share, { isVisible: this.state.shareIsVisible, closeShare: this.closeShare }),
            React.createElement(FooterBar, { navigator: this.props.navigator })));
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
    },
    listWrapper: {
        margin: 10,
        backgroundColor: '#F2F2F2'
    }
});
