import * as React from 'react'
import { Grid, CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { WindowWithLIFF, SessionInfo } from '../@types/liff'
import ButtonContainer from './button-container'
import UserContainer from './user-container'

declare var window: WindowWithLIFF

export interface AppProps {}

export interface AppState extends SessionInfo {}

export const appTheme = createMuiTheme()

// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    window.liff.init((data) => {
      this.setState(data)
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12}>
            <ButtonContainer session={this.state} />
          </Grid>
          <Grid item xs={12}>
            <UserContainer />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
}
