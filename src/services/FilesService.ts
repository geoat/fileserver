import WebApi from '../common/WebApi'
import {File, Type} from '../common/models/FileModel'

export default {
  test: function () {
    return WebApi.get('test').then((response: any) => {
      return response
    }).catch(function () {
    })
  },
  getFiles: function() {
    const files: File[] = [
      {"name": "abcd", "type": Type.File },
      {"name": "abcd1", "type": Type.Folder },
      {"name": "abcd2", "type": Type.File },
      {"name": "abcd3", "type": Type.Folder },
      {"name": "abcd4", "type": Type.File },
      {"name": "abcd5", "type": Type.Folder },
      {"name": "abcd6", "type": Type.File },
      {"name": "abcd7", "type": Type.Folder },
      {"name": "abcd8", "type": Type.File },

    ]

    return files

  }
}