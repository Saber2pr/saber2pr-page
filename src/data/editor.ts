import { Terminal, File } from 'saber-node'
import { Data } from '../type'

const DATA = `${process.cwd()}/src/data/data.json`

const EDITOR = File.Json.pipe<Data>(DATA)

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
      await about()
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

async function about() {
  const content = await Terminal.getUserInput('content: ')
  try {
    await EDITOR(json => {
      json.about.content = content
      return json
    })
  } catch (error) {
    Terminal.Print.error(error)
  }
  Terminal.Print.success('about-edit(ok)')
}

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
  try {
    await EDITOR(json => {
      json.project.unshift({ name, href, src, infor })
      return json
    })
  } catch (error) {
    Terminal.Print.error(error)
  }
  Terminal.Print.success('project-add(ok)')
}

async function project_del() {
  const name = await Terminal.getUserInput('name: ')
  try {
    await EDITOR(json => {
      const projects = json.project.filter(p => p.name !== name)
      json.project = projects
      return json
    })
  } catch (error) {
    Terminal.Print.error(error)
  }
  Terminal.Print.success('project-delete(ok)')
}

async function blog() {
  const input = await Terminal.getUserInput(
    createOptions(['1. add a new blog.', '2. delete a blog.'])
  )
  switch (input) {
    case '1':
      await blog_add()
      break
    case '2':
      await blog_del()
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
  try {
    await EDITOR(json => {
      json.blog.unshift({ name, type, content })
      return json
    })
  } catch (error) {
    Terminal.Print.error(error)
  }
  Terminal.Print.success('blog-add(ok)')
}

async function blog_del() {
  const name = await Terminal.getUserInput('name: ')
  try {
    await EDITOR(json => {
      const blogs = json.blog.filter(b => b.name !== name)
      json.blog = blogs
      return json
    })
  } catch (error) {
    Terminal.Print.error(error)
  }
  Terminal.Print.success('blog delete(ok)')
}
