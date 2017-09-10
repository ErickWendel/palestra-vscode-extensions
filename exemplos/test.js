console.log(`
             fb.com/page.erickwendel 
             github.com/erickwendel
            `)

const Hapi = require('hapi')
const Joi = require('joi')
const app = new Hapi.Server()
app.connection({port: 3000})


app.route([
    {
        path: '/products',
        method: 'GET',
        handler:  async (req, reply) => {
            return await Promise.resolve(reply({ ok: true}))
        }
    },
    {
            path: '/products',
            method: 'POST',
            config: {
                handler:  async (req, reply) => {
                    return await Promise.resolve(reply({ idade: req.payload.idade}))
                },
                validate: {
                    payload: {
                        idade: Joi. number().required(),
                }
            }
        },
        
    }
])




app.start(()=> console.log(`running at: ${app.info.port}` ))