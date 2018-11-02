export default interface LIFF {
  init(
    successCallback?: (data: SessionInfo) => void,
    errorCallback?: (data: any) => void
  ) : SessionInfo
  openWindow(url: string, external?: boolean) : void
  getProfile() : Promise<UserProfile>
  sendMessages(messages: any[]) : Promise<void>
  closeWindow() : void
}

export interface SessionInfo {
  language: string
  'context.type': 'utou' | 'room' | 'group' | 'none'
  'context.viewType': 'compact' | 'tall' | 'full'
  'context.userId'?: string
  'context.utouId'?: string
  'context.roomId'?: string
  'context.groupId'?: string
}

export interface UserProfile {
  userId: string,
  displayName: string,
  pictureUrl: string,
  statusMessage: string
}

export interface WindowWithLIFF extends Window {
  liff: LIFF
}
