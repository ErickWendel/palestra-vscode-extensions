const Hapi = require('hapi')
const Joi = require('joi')
const app = new Hapi.Server()
app.connection({port: 3000})

app.route([
    {
        path: '/',
        method: 'GET',
        handler:  async (req, reply) => {
            return await Promise.resolve(reply({ ok: true}))
        }
    }, 
    {
        path: '/',
        method: 'POST',
        config: {
            handler: async(req, reply) => {
                return await Promise.resolve(reply({ ok: true}))
            
            },
            validate: {
                payload: {
                    nome: Joi.string().required()
                }
            }
        }
    }
])

app.start(()=> console.log('running at: ' + app.info.port))
