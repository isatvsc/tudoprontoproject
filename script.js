import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://jztincpbulxyjktatwlp.supabase.co',
  'sb_publishable_s3f5Vw2d5ihqIMvugivCYA_OwCQMtpG'
)

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault()

  const profissao = document.getElementById('profissao').value
  const numero = document.getElementById('numero').value

  await supabase.from('profissionais').insert([
    { profissao, numero }
  ])

  carregar()
})

async function carregar() {
  const { data } = await supabase
    .from('profissionais')
    .select('*')

  const lista = document.getElementById('lista')
  lista.innerHTML = ""

  data.forEach(p => {
    const li = document.createElement('li')
    li.textContent = `${p.profissao} - ${p.numero}`
    lista.appendChild(li)
  })
}

carregar()