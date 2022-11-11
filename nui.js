import axios from "axios"

const NUI = {
    /**
     * Listen to key events.
     * @param {String} type - Listen to NUI Event with type:
     * @param {Function} func - The callback function when the type gets called.
     */
    OnNuiEvent(type, func) {
        window.addEventListener('message', (e) => {
            if (e.data.type == type) {
                func(e.data)
            }
        })
    },
    /**
     * Listen to key events.
     * @param {Array} keys - A list of keys to listen to.
     * @param {Function} func - The callback function when a key gets pressed.
     */
    OnKeyEvent(keys, func) {
        window.addEventListener('keydown', (e) => {
            keys.map((key) => {
                if (e.key == key) {
                    func()
                }
            })
        })
    },
    /**
     * Remove message and key listener.
     */
    RemoveNuiListener() {
        window.removeEventListener('message')
        window.removeEventListener('keydown')
    },
    /**
     * Post Request to the fivem client.
     * @param {String} resName - The name of the resource where you want to call to.
     * @param {String} name - The name of the callback.
     * @param {Object} [payload] - The payload you want to send with the post request.
     */
    async post(resName, name, payload = {}) {
        return (await axios.post(`https://${resName}/${name}`, payload)).data
    }
}

export default NUI