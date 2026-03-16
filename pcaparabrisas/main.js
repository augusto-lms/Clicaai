document.getElementById('btn-save')?.addEventListener('click', (e) => {
  e.preventDefault();
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:PCA Parabrisas',
    'ORG:PCA Parabrisas',
    'TEL;TYPE=CELL:+55',
    'EMAIL:contato@pcaparabrisas.com.br',
    'ADR;TYPE=WORK:;;Av. Juscelino Kubitschek, 1361;Patrocínio;MG;;Brasil',
    'URL:https://clicaai.shop/pcaparabrisas',
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'pca-parabrisas.vcf';
  a.click();
  URL.revokeObjectURL(url);
});
