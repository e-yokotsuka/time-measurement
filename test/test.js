import assert from "assert";
import TimeMasurement from "../src/index"

const tm = new TimeMasurement(console.log);
const OneSeconds = ( v = "" ) => new Promise(resolve => setTimeout(() => { resolve(v) }, 1000));
const AsyncTest = async () => {
    const hoge = await OneSeconds("O");
    tm.EndMeasurement();
    const fuge = await OneSeconds("K");
    tm.EndMeasurement();
    return `${hoge}${fuge}`;
}
  
describe('Test', () => {
    it('Start', async () => {
      tm.StartMeasurement("Test1");
      const r = await AsyncTest();
      assert.ok(r === "OK");
      tm.EndMeasurement("Test1");
    });

    it('Default Timer', async () => {
        tm.EndMeasurement();
        let r = await OneSeconds("ONE");
        assert.ok(r === "ONE");
        tm.EndMeasurement();
    });

    it('Nest', async () => {
        tm.StartMeasurement("Test2");
        await OneSeconds();
        tm.StartMeasurement("Test1");
        const r = await AsyncTest();
        assert.ok(r === "OK");
        tm.EndMeasurement("Test1");
        tm.EndMeasurement("Test2");
    });

    it('Simple',() => {
        tm.measurement(()=>{
            let s = "";
            for(let i = 0;i < 20000;i++) for(let ii = 0;ii < 20000;ii++) s = `${s}${s}`;
        },
        "masurement Simple");
    });

});