import WebApi from '../common/WebApi'
import {File, Type} from '../common/models/FileModel'

export default {
  test: function () {
    return WebApi.get('files').then((response: any) => {
      return response
    }).catch(function () {
    })
  },
  getFiles: function() {
    return WebApi.get('files').then((response: any) => {
      return response
    }).catch(function () {
    })

  }
}