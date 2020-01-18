export default function bindAll(self, toBind) {
    const l = toBind.length
  
    for (let i = 0; i < l; i++) {
        self[toBind[i]] = self[toBind[i]].bind(self)
    }  
}