myURL = new URL('https://example.org:8000/path/name?query=string&cursos=programacion');

console.log(myURL.hostname); // example.org
console.log(myURL.pathname); // /path/name

console.log(myURL.searchParams); // { 'query' => 'string', 'cursos' => 'programacion' }
console.log(myURL.searchParams.get('cursos')); // programacion

console.log(myURL.protocol); // https:
console.log(myURL.port); // 8000


