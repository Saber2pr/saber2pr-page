import { Terminal, File } from 'saber-node'
import { Application } from '../type'

const DATA = `${process.cwd()}/src/data/data.json`

const EDITOR = File.Json.pipe<Application>(DATA)

const createOptions = (array: string[]) =>
  ['input the index:']
    .concat(array)
    .join('\n')
    .concat('\n')

async function main() {
  const input = await Terminal.getUserInput(
    createOptions(['1. common', '2. home', '3. project', '4. about', '5. blog'])
  )
  switch (input) {
    case '1':
      break
    case '2':
      break
    case '3':
      await project()
      break
    case '4':
      break
    case '5':
      await blog()
      break
    default:
      Terminal.Print.error('input error.')
      break
  }
}
main()

async function project() {
  const input = await Terminal.getUserInput(
    createOptions(['1. add a new project'])
  )
  switch (input) {
    case '1':
      await project_add()
      break
    default:
      Terminal.Print.error('input error.')
      break
  }
}

async function project_add() {
  const name = await Terminal.getUserInput('name: ')
  const href = await Terminal.getUserInput('href: ')
  const src = await Terminal.getUserInput('src: ')
  const infor = await Terminal.getUserInput('infor: ')
  await EDITOR(json => {
    json.project.push({ name, href, src, infor })
    return json
  })
}

async function blog() {
  const input = await Terminal.getUserInput(
    createOptions(['1. add a new blog.'])
  )
  switch (input) {
    case '1':
      await blog_add()
      break
    default:
      Terminal.Print.error('input error.')
      break
  }
}

async function blog_add() {
  const name = await Terminal.getUserInput('name: ')
  const type = await Terminal.getUserInput('type: ')
  const content = await Terminal.getUserInput('content: ')
  await EDITOR(json => {
    json.blog.push({ name, type, content })
    return json
  })
}
