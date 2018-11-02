import * as React from 'react'
import { Button, Grid, withStyles, StyleRulesCallback } from '@material-ui/core'
import { WindowWithLIFF, SessionInfo } from '../@types/liff'

declare var window: WindowWithLIFF

export interface ButtonContainerProps {
  session: SessionInfo,
  classes?: {
    wrapper: string
  }
}

export interface ButtonContainerState {}

export const styles: StyleRulesCallback = theme => ({
  wrapper: {
    padding: theme.spacing.unit,
    textAlign: 'center'
  }
})

export class ButtonContainer extends React.Component<ButtonContainerProps, ButtonContainerState> {
  openWindow() {
    window.liff.openWindow('https://google.com')
  }

  closeWindow() {
    window.liff.closeWindow()
  }

  getProfile() {
  }

  sendMessages() {
    window.liff.sendMessages([
      {
        type: 'text',
        text: 'You\'ve successfully sent a message! Hooray!'
      },
      {
        type: 'sticker',
        packageId: '2',
        stickerId: '144'
      }
    ]).then(() => {
      window.alert('Message sent')
    }).catch((error) => {
      window.alert(`Error sending message: ${error}`)
    })
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={6} className={this.props.classes.wrapper}>
          <Button variant="contained" color="primary" onClick={() => this.openWindow()}>Open Window</Button>
        </Grid>
        <Grid item xs={6} className={this.props.classes.wrapper}>
          <Button variant="contained" color="secondary" onClick={() => this.closeWindow()}>Close Window</Button>
        </Grid>
        <Grid item xs={6} className={this.props.classes.wrapper}>
          <Button variant="contained" color="primary" onClick={() => this.getProfile()}>Get Profile</Button>
        </Grid>
        <Grid item xs={6} className={this.props.classes.wrapper}>
          <Button variant="contained" color="primary" onClick={() => this.sendMessages()}>Send Message</Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ButtonContainer)
