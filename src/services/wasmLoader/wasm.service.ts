import loader from '@assemblyscript/loader';

class WasmLoader {
  wasm: any;

  // constructor(){
  //     this.init()
  // }

  init() {
    return loader
      .instantiate(fetch(`${window.origin}/release.wasm`))
      .then((result) => {
        // storing the response inside a wasm variable for now
        this.wasm = result;
      })
      .catch(() => {
        this.wasm = null;
      });
  }

  getPublicKey() {
    if (this.wasm) {
      const { getPublicKey, __getString } = this.wasm.exports;
      const pbKey = __getString(getPublicKey());
      return pbKey;
    }
    return '';
  }
}

export default WasmLoader;
