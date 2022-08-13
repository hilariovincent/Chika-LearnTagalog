import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';

class UserPermissions{
    getCameraPermission = async () => {
        if (Constants.platform.io) {
            const {status} = await ImagePicker.getMediaLibraryPermissionsAsync()

            if(status != "granted"){
                alert("We need permission to use your camera roll")
            }
        }
    }
}

export default new UserPermissions();