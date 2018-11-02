import * as React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { WindowWithLIFF, UserProfile } from '../@types/liff'

declare var window: WindowWithLIFF

export interface UserContainerProps {
  classes?: any
}

export interface UserContainerState extends UserProfile {}

export default class UserContainer extends React.Component<UserContainerProps, UserContainerState> {
  getUserProfile() {
    window.liff.getProfile().then((user) => {
      this.setState(user)
    })
  }

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia component="img" image={this.state.pictureUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.displayName}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => this.getUserProfile()}>Get Profile</Button>
        </CardActions>
      </Card>
    )
  }
}
