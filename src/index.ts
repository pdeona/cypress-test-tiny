(async () => {
  const res = await window.fetch('/fail', {
    method: 'POST',
  })

  const r = document.querySelector('#root')
  if (r) r.innerHTML = String(res.status)
})()
