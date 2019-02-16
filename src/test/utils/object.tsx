import { objectCast } from '../../core/utils/object'

export function test_utils_object_tsx() {
  let test = objectCast({
    name: 'testval',
    age: 12
  })('name')({ infor: 233 })
  console.log(test)
}
