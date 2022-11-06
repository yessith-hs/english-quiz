import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h3${3}>Contáctanos</h3>`;
const $fragment2 = parseFragment`<div class="GS_social_hand${0}"${2}><figure${3}><svg xmlns="http://www.w3.org/2000/svg" width="30.16" height="27.181"${3}><g data-name="Grupo 307" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${3}><path data-name="Trazado 1161" d="m4.9 15.726 1.35-7.263A1.681 1.681 0 0 1 7.3 7.185h0a1.712 1.712 0 0 1 2.272.929l1.645 4.176 6.3-2.482a1.774 1.774 0 0 1 2.327 1.271l1.769 7.858a1.759 1.759 0 0 1-1.057 2.074l-9.415 3.709a3.086 3.086 0 0 1-1.41.207l-1.237-.11" stroke="#003696"${3}><path data-name="Trazado 1162" d="m4.9 15.726 3.567 9.056" stroke="#003696"${3}><path data-name="Trazado 1163" d="m1.495 17.066 3.4-1.34 3.567 9.056-3.4 1.34a.771.771 0 0 1-1-.435l-3-7.621a.771.771 0 0 1 .435-1Z" stroke="#003696"${3}><path data-name="Trazado 1164" d="m15.45 1.331 1.642 3.489" stroke="#003696"${3}><path data-name="Trazado 1165" d="m24.071 1.535-1.458 3.568" stroke="#003696"${3}><path data-name="Trazado 1166" d="m29.081 8.555-3.97.334" stroke="#da031b"${3}></g></svg></figure><h3${3}>Soluciones recomendadas para ti</h3></div>`;
const $fragment3 = parseFragment`<svg xmlns="http://www.w3.org/2000/svg" width="23.023" height="22.992"${3}><path data-name="Sustracción 1" d="M11.512 22.492a11.017 11.017 0 0 1-11.012-11 11.014 11.014 0 1 1 11.012 11Zm2.745-11.85a1.221 1.221 0 0 1 .358.055 1.4 1.4 0 0 1 1.011 1.424c.006 1.521.006 3.063.006 4.555v.217h2.756v-5.239a3.269 3.269 0 0 0-3.149-3.229 2.75 2.75 0 0 0-1.606.527 4.307 4.307 0 0 0-.53.453l-.007.008c-.074.07-.151.143-.229.213v-1h-2.75v8.26h2.75v-4.684c0-.113 0-.24.012-.359a1.406 1.406 0 0 1 1.378-1.2ZM5.506 8.615v8.268h2.739V8.615ZM6.87 3.722a1.671 1.671 0 0 0-1.185.5 1.623 1.623 0 0 0-.474 1.16 1.649 1.649 0 0 0 1.658 1.646h.006a1.655 1.655 0 0 0 0-3.311Z" fill="#fff" stroke="rgba(0,0,0,0)"${3}></svg>`;
const $fragment4 = parseFragment`<svg xmlns="http://www.w3.org/2000/svg" width="21.904" height="21.866"${3}><g data-name="Grupo 677" fill="#fff"${3}><path data-name="Trazado 569" d="M10.952 8.564a2.367 2.367 0 1 0 2.372 2.37 2.371 2.371 0 0 0-2.372-2.37"${3}><path data-name="Trazado 570" d="M16.419 6.805a2.306 2.306 0 0 0-1.332-1.33 3.834 3.834 0 0 0-1.3-.239c-.738-.033-.961-.041-2.834-.041s-2.092.008-2.831.041a3.886 3.886 0 0 0-1.3.239 2.2 2.2 0 0 0-.8.523 2.162 2.162 0 0 0-.525.807 3.967 3.967 0 0 0-.244 1.3c-.032.737-.041.96-.041 2.83s.009 2.088.041 2.826a3.959 3.959 0 0 0 .244 1.3 2.138 2.138 0 0 0 .525.8 2.087 2.087 0 0 0 .8.523 3.857 3.857 0 0 0 1.3.243c.739.033.962.041 2.831.041s2.1-.008 2.834-.041a3.806 3.806 0 0 0 1.3-.243 2.113 2.113 0 0 0 .808-.523 2.185 2.185 0 0 0 .524-.8 3.862 3.862 0 0 0 .239-1.3c.037-.738.041-.956.041-2.826s0-2.093-.041-2.83a3.869 3.869 0 0 0-.239-1.3m-5.467 7.816a3.691 3.691 0 1 1 3.7-3.688 3.689 3.689 0 0 1-3.7 3.688m3.684-6.505a.863.863 0 1 1 .864-.863.867.867 0 0 1-.864.863"${3}><path data-name="Trazado 571" d="M10.952 0a10.946 10.946 0 1 0 7.743 3.2A10.929 10.929 0 0 0 10.952 0m7.244 13.93a5.305 5.305 0 0 1-.339 1.768 3.521 3.521 0 0 1-.84 1.289 3.6 3.6 0 0 1-1.291.839 5.307 5.307 0 0 1-1.767.338c-.777.035-1.025.043-3.007.043s-2.226-.008-3-.043a5.323 5.323 0 0 1-1.771-.338 3.668 3.668 0 0 1-1.292-.839 3.625 3.625 0 0 1-.84-1.289 5.434 5.434 0 0 1-.339-1.768c-.034-.775-.043-1.023-.043-3s.009-2.222.043-3a5.407 5.407 0 0 1 .339-1.764 3.716 3.716 0 0 1 2.132-2.128 5.346 5.346 0 0 1 1.771-.339c.776-.034 1.025-.042 3-.042s2.23.008 3.007.042a5.331 5.331 0 0 1 1.767.339 3.718 3.718 0 0 1 2.131 2.128 5.279 5.279 0 0 1 .339 1.764c.039.779.043 1.023.043 3s0 2.222-.043 3"${3}></g></svg>`;
const $fragment5 = parseFragment`<svg xmlns="http://www.w3.org/2000/svg" width="21.934" height="21.895"${3}><path data-name="Trazado 555" d="M10.968 0a10.963 10.963 0 1 0 7.752 3.208A10.93 10.93 0 0 0 10.968 0m3.057 6.649h-1.444c-.509 0-.616.208-.616.735v1.272h2.06l-.2 2.235h-1.861v6.673H9.295V10.92H7.906V8.656h1.389V6.875c0-1.671.9-2.543 2.881-2.543h1.848Z" fill="#fff"${3}></svg>`;
const $fragment6 = parseFragment`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"${3}><path data-name="Exclusión 1" d="M11 22A11 11 0 0 1 3.222 3.222a11 11 0 1 1 15.556 15.556A10.928 10.928 0 0 1 11 22Zm-1.36-5.308c.578.008 1.105.012 1.612.012 2.032 0 3.789-.066 5.7-.213a2.056 2.056 0 0 0 1.1-.559 1.8 1.8 0 0 0 .437-.717 7.6 7.6 0 0 0 .373-2.437c.026-.362.029-2.4.029-3.254a6.112 6.112 0 0 0-.653-2.96A2.1 2.1 0 0 0 17 5.846a56.666 56.666 0 0 0-5.084-.23c-.3 0-.612 0-.916.007a56.767 56.767 0 0 0-5.978.215 2.057 2.057 0 0 0-1.046.531 3.6 3.6 0 0 0-.785 2.418v.055a34.906 34.906 0 0 0 0 4.645 6.965 6.965 0 0 0 .209 1.435 2.262 2.262 0 0 0 .509.975 2.039 2.039 0 0 0 1.068.559 32.5 32.5 0 0 0 3.968.244c.233 0 .465 0 .695-.008Zm-.258-3.484V8.771L13.625 11c-.613.34-1.325.7-2.078 1.084a89.7 89.7 0 0 0-2.164 1.123Z" fill="#fff"${3}></svg>`;
const $fragment7 = parseFragment`<h3${3}>Global Seguros</h3>`;
const $fragment8 = parseFragment`<span${3}>Global seguros - Portal clientes - V1.0</span>`;
const stc0 = {
  classMap: {
    "GS_footer": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "GS_container": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "GS_brand": true
  },
  key: 2
};
const stc3 = {
  key: 3
};
const stc4 = {
  attrs: {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "139.523",
    "height": "79.321",
    "viewBox": "0 0 139.523 79.321"
  },
  key: 4,
  svg: true
};
const stc5 = {
  classMap: {},
  key: 21
};
const stc6 = {
  key: 24
};
const stc7 = {
  key: 25
};
const stc8 = {
  key: 27
};
const stc9 = {
  key: 29
};
const stc10 = {
  classMap: {
    "GS_social": true
  },
  key: 31
};
const stc11 = {
  classMap: {
    "GS_social_link": true
  },
  key: 34
};
const stc12 = {
  key: 35
};
const stc13 = {
  key: 36
};
const stc14 = {
  key: 40
};
const stc15 = {
  key: 44
};
const stc16 = {
  key: 48
};
const stc17 = {
  classMap: {
    "GS_content": true
  },
  key: 54
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element, st: api_static_fragment, fid: api_scoped_frag_id, t: api_text} = $api;
  return [api_element("footer", stc0, [api_element("section", stc1, [api_element("div", stc2, [api_element("figure", stc3, [api_element("svg", stc4, [api_element("g", {
    attrs: {
      "id": api_scoped_id("Grupo_63"),
      "data-name": "Grupo 63",
      "transform": "translate(-317.839 204.182)"
    },
    key: 5,
    svg: true
  }, [api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_539"),
      "data-name": "Trazado 539",
      "d": "M412.657-108.3a7.365,7.365,0,0,1-3.662-.862q-1.542-.867-1.54-1.54a.8.8,0,0,1,.235-.56.694.694,0,0,1,.515-.25,1.03,1.03,0,0,1,.636.282,5.879,5.879,0,0,0,3.816,1.436,3.789,3.789,0,0,0,2.634-.889,3.11,3.11,0,0,0,.987-2.435,2.651,2.651,0,0,0-.437-1.559,3.134,3.134,0,0,0-1.116-.988,14.631,14.631,0,0,0-2.325-.864,11.275,11.275,0,0,1-2.749-1.1,3.913,3.913,0,0,1-1.351-1.426,4.435,4.435,0,0,1-.492-2.17,4.272,4.272,0,0,1,1.468-3.366,5.3,5.3,0,0,1,3.627-1.287,6.445,6.445,0,0,1,3.3.834c.951.557,1.43,1.055,1.43,1.5a.765.765,0,0,1-.228.545.729.729,0,0,1-.547.24.551.551,0,0,1-.325-.093c-.085-.062-.211-.158-.374-.289a6.463,6.463,0,0,0-1.713-.982,4.809,4.809,0,0,0-1.538-.244,3.668,3.668,0,0,0-2.567.86,2.939,2.939,0,0,0-.944,2.284,2.56,2.56,0,0,0,.4,1.478,2.911,2.911,0,0,0,1.037.924,11.341,11.341,0,0,0,2.1.761,8.115,8.115,0,0,1,3.953,2.026,4.407,4.407,0,0,1,.981,2.92,4.49,4.49,0,0,1-1.467,3.49,5.341,5.341,0,0,1-3.738,1.33",
      "transform": "translate(-24.742 -21.617)",
      "fill": "#fff"
    },
    key: 6,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_540"),
      "data-name": "Trazado 540",
      "d": "M432.326-114.3a4.761,4.761,0,0,0-.916-3.032,3.026,3.026,0,0,0-2.521-1.167,3.619,3.619,0,0,0-2.762,1.151,4.779,4.779,0,0,0-1.215,3.048Zm-7.462,1.462a4.891,4.891,0,0,0,1.177,3.373,3.835,3.835,0,0,0,3,1.325,5.16,5.16,0,0,0,1.569-.254,5.337,5.337,0,0,0,1.373-.631,1.3,1.3,0,0,1,.578-.256.616.616,0,0,1,.5.256.874.874,0,0,1,.2.555c0,.366-.439.76-1.318,1.177a6.756,6.756,0,0,1-2.928.623,5.264,5.264,0,0,1-4.185-1.776,7,7,0,0,1-1.545-4.75,7.591,7.591,0,0,1,1.521-4.864,4.991,4.991,0,0,1,4.136-1.921,4.5,4.5,0,0,1,3.626,1.55,6.2,6.2,0,0,1,1.319,4.156,1.6,1.6,0,0,1-.312,1.066,1.075,1.075,0,0,1-.865.371Z",
      "transform": "translate(-29.111 -23.246)",
      "fill": "#fff"
    },
    key: 7,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_541"),
      "data-name": "Trazado 541",
      "d": "M448.675-114.56a3.989,3.989,0,0,0-1.032-2.843,3.426,3.426,0,0,0-2.613-1.1,3.48,3.48,0,0,0-2.871,1.355,5.944,5.944,0,0,0-1.081,3.8,6.223,6.223,0,0,0,1.042,3.818,3.435,3.435,0,0,0,2.91,1.387,3.369,3.369,0,0,0,2.637-1.124,4.122,4.122,0,0,0,1.008-2.853Zm1.559,6.491a7.015,7.015,0,0,1-1.462,4.834,5.447,5.447,0,0,1-4.27,1.62,6.952,6.952,0,0,1-2.736-.588c-.926-.392-1.386-.782-1.386-1.165a.911.911,0,0,1,.207-.62.593.593,0,0,1,.441-.239,1.574,1.574,0,0,1,.7.283,7.642,7.642,0,0,0,1.457.654,4.609,4.609,0,0,0,1.365.19,3.946,3.946,0,0,0,3.093-1.145,5.009,5.009,0,0,0,1.032-3.444V-108.9a4.116,4.116,0,0,1-1.54,1.633,4.373,4.373,0,0,1-2.288.6,4.734,4.734,0,0,1-3.877-1.787,7.534,7.534,0,0,1-1.449-4.889,7.325,7.325,0,0,1,1.492-4.864,4.98,4.98,0,0,1,4.018-1.773,4.4,4.4,0,0,1,2.116.509,3.954,3.954,0,0,1,1.528,1.454v-1.031c0-.508.266-.762.8-.762a.674.674,0,0,1,.763.762Z",
      "transform": "translate(-33.594 -23.246)",
      "fill": "#fff"
    },
    key: 8,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_542"),
      "data-name": "Trazado 542",
      "d": "M466.969-107.55a.687.687,0,0,1-.785.772.683.683,0,0,1-.772-.772v-1.339a4.57,4.57,0,0,1-1.7,1.714,4.875,4.875,0,0,1-2.4.568,4.092,4.092,0,0,1-3.223-1.275,5.031,5.031,0,0,1-1.134-3.473v-7.609a.684.684,0,0,1,.761-.785.7.7,0,0,1,.8.785v7.509a3.642,3.642,0,0,0,.791,2.457,2.786,2.786,0,0,0,2.227.922,3.551,3.551,0,0,0,2.842-1.209,4.753,4.753,0,0,0,1.036-3.2v-6.48a.689.689,0,0,1,.772-.785.693.693,0,0,1,.785.785Z",
      "transform": "translate(-38.408 -23.311)",
      "fill": "#fff"
    },
    key: 9,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_543"),
      "data-name": "Trazado 543",
      "d": "M474.962-118.181a3.46,3.46,0,0,1,1.257-1.349,3.518,3.518,0,0,1,1.824-.453,2.915,2.915,0,0,1,1.368.249.738.738,0,0,1,.45.633,1.1,1.1,0,0,1-.143.56.452.452,0,0,1-.411.24,1.2,1.2,0,0,1-.38-.075,3.233,3.233,0,0,0-.908-.121,2.766,2.766,0,0,0-2.222.982,3.852,3.852,0,0,0-.834,2.588v7.314a.689.689,0,0,1-.785.772.683.683,0,0,1-.773-.772v-11.44a.678.678,0,0,1,.773-.759.683.683,0,0,1,.785.759Z",
      "transform": "translate(-42.949 -23.246)",
      "fill": "#fff"
    },
    key: 10,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_544"),
      "data-name": "Trazado 544",
      "d": "M487.286-118.5a3.721,3.721,0,0,0-2.884,1.289,5.626,5.626,0,0,0-1.165,3.887,5.47,5.47,0,0,0,1.223,3.879,3.767,3.767,0,0,0,2.827,1.3,3.809,3.809,0,0,0,2.849-1.3,5.474,5.474,0,0,0,1.225-3.879,5.725,5.725,0,0,0-1.145-3.864,3.715,3.715,0,0,0-2.928-1.312m0,11.827a5.11,5.11,0,0,1-4.037-1.8,7.113,7.113,0,0,1-1.571-4.854,7.1,7.1,0,0,1,1.571-4.92,5.189,5.189,0,0,1,4.037-1.741,5.178,5.178,0,0,1,4.061,1.766,7.1,7.1,0,0,1,1.571,4.894,7.106,7.106,0,0,1-1.577,4.85,5.146,5.146,0,0,1-4.055,1.8",
      "transform": "translate(-45.234 -23.246)",
      "fill": "#fff"
    },
    key: 11,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_545"),
      "data-name": "Trazado 545",
      "d": "M502.562-106.672a7.376,7.376,0,0,1-1.81-.206,6.544,6.544,0,0,1-1.6-.657,3.432,3.432,0,0,1-.945-.671.806.806,0,0,1-.158-.492.793.793,0,0,1,.212-.544.64.64,0,0,1,.487-.24.967.967,0,0,1,.6.232,5.473,5.473,0,0,0,1.505.791,5.069,5.069,0,0,0,1.711.315,3.69,3.69,0,0,0,2.2-.576,1.836,1.836,0,0,0,.792-1.561,1.625,1.625,0,0,0-.627-1.374,4.263,4.263,0,0,0-1.682-.711c-1.143-.238-1.974-.435-2.484-.591a4.245,4.245,0,0,1-1.32-.642,2.981,2.981,0,0,1-.877-1.044,3.478,3.478,0,0,1-.327-1.6,3.316,3.316,0,0,1,1.284-2.7,5.012,5.012,0,0,1,3.269-1.042,6.391,6.391,0,0,1,2.723.583c.843.387,1.264.78,1.264,1.171a.927.927,0,0,1-.226.578.641.641,0,0,1-.5.282,1.1,1.1,0,0,1-.6-.246,4.676,4.676,0,0,0-2.689-.882,3.475,3.475,0,0,0-2.2.607,1.891,1.891,0,0,0-.765,1.55,1.792,1.792,0,0,0,.381,1.186,2.352,2.352,0,0,0,1.006.7,18.232,18.232,0,0,0,2.269.6,5.469,5.469,0,0,1,2.921,1.3,3.161,3.161,0,0,1,.736,2.172,3.372,3.372,0,0,1-1.221,2.655,4.893,4.893,0,0,1-3.331,1.061",
      "transform": "translate(-49.753 -23.246)",
      "fill": "#fff"
    },
    key: 12,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_546"),
      "data-name": "Trazado 546",
      "d": "M331.69-111.646a2.44,2.44,0,0,1-.541,1.637,5.027,5.027,0,0,1-2.019,1.214,9.633,9.633,0,0,1-3.5.573,7.277,7.277,0,0,1-5.684-2.347,9.145,9.145,0,0,1-2.109-6.348,9.187,9.187,0,0,1,2.259-6.526,7.516,7.516,0,0,1,5.756-2.422,9.342,9.342,0,0,1,3.171.452,6.737,6.737,0,0,1,1.81.911,1.268,1.268,0,0,1,.571.974,1.593,1.593,0,0,1-.368,1,1.057,1.057,0,0,1-.838.468,1.939,1.939,0,0,1-.911-.271,7.408,7.408,0,0,0-3.35-.91,4.815,4.815,0,0,0-3.811,1.674,6.77,6.77,0,0,0-1.462,4.6,6.657,6.657,0,0,0,1.4,4.519,4.931,4.931,0,0,0,3.922,1.6,5.881,5.881,0,0,0,1.674-.232,2.609,2.609,0,0,0,.992-.444.836.836,0,0,0,.2-.6v-3.247h-2.822a1.4,1.4,0,0,1-.961-.28,1.412,1.412,0,0,1-.307-1.063,1.328,1.328,0,0,1,.307-.987,1.426,1.426,0,0,1,1.011-.294h4.21c.928,0,1.391.425,1.391,1.281Z",
      "transform": "translate(0 -21.622)",
      "fill": "#fff"
    },
    key: 13,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_547"),
      "data-name": "Trazado 547",
      "d": "M342.333-109.428q0,1.158-1.417,1.158-1.364,0-1.365-1.158v-15.32a1.031,1.031,0,0,1,.319-.848,1.718,1.718,0,0,1,1.071-.258,1.694,1.694,0,0,1,1.066.264,1.022,1.022,0,0,1,.325.843Z",
      "transform": "translate(-5.995 -21.625)",
      "fill": "#fff"
    },
    key: 14,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_548"),
      "data-name": "Trazado 548",
      "d": "M351.665-117.427a2.731,2.731,0,0,0-2.357,1.136,5,5,0,0,0-.821,3,5.088,5.088,0,0,0,.833,3.017,2.708,2.708,0,0,0,2.345,1.169,2.774,2.774,0,0,0,2.389-1.107,5.12,5.12,0,0,0,.813-3.08,5.028,5.028,0,0,0-.8-3.1,2.848,2.848,0,0,0-2.4-1.037m0,10.838a5.465,5.465,0,0,1-4.365-1.866,7.14,7.14,0,0,1-1.606-4.834,7.068,7.068,0,0,1,1.6-4.826,5.5,5.5,0,0,1,4.37-1.834,5.553,5.553,0,0,1,4.407,1.821,7.057,7.057,0,0,1,1.6,4.838,7.1,7.1,0,0,1-1.614,4.851,5.533,5.533,0,0,1-4.4,1.85",
      "transform": "translate(-7.69 -23.256)",
      "fill": "#fff"
    },
    key: 15,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_549"),
      "data-name": "Trazado 549",
      "d": "M367.3-113.858a3.38,3.38,0,0,0,.746,2.222,2.481,2.481,0,0,0,2.026.9,2.566,2.566,0,0,0,2.2-1.111,5.2,5.2,0,0,0,.8-3.075,5.155,5.155,0,0,0-.788-3.022,2.562,2.562,0,0,0-2.217-1.116,2.517,2.517,0,0,0-2.015.882,3.317,3.317,0,0,0-.756,2.244Zm0,3.852v.654c0,.72-.481,1.082-1.44,1.082a1.533,1.533,0,0,1-1.053-.277,1.173,1.173,0,0,1-.292-.881V-124.7a1.123,1.123,0,0,1,.316-.883,1.592,1.592,0,0,1,1.051-.275,1.707,1.707,0,0,1,1.091.275,1.109,1.109,0,0,1,.327.883v4.78a3.7,3.7,0,0,1,3.2-1.662,4.752,4.752,0,0,1,3.907,1.82,7.512,7.512,0,0,1,1.459,4.839,7.76,7.76,0,0,1-1.4,4.89,4.477,4.477,0,0,1-3.717,1.811,3.7,3.7,0,0,1-3.448-1.787",
      "transform": "translate(-12.888 -21.625)",
      "fill": "#fff"
    },
    key: 16,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_550"),
      "data-name": "Trazado 550",
      "d": "M390.514-114.3a3.332,3.332,0,0,0-.755-2.24,2.525,2.525,0,0,0-2.016-.888,2.559,2.559,0,0,0-2.215,1.122,5.166,5.166,0,0,0-.788,3.018,5.162,5.162,0,0,0,.8,3.083,2.569,2.569,0,0,0,2.2,1.1,2.491,2.491,0,0,0,2.027-.9,3.376,3.376,0,0,0,.744-2.227Zm0,5.849a3.6,3.6,0,0,1-3.458,1.861,4.46,4.46,0,0,1-3.706-1.811,7.767,7.767,0,0,1-1.4-4.887,7.53,7.53,0,0,1,1.457-4.847,4.762,4.762,0,0,1,3.911-1.815,3.572,3.572,0,0,1,3.2,1.664v-.458q0-1.155,1.418-1.156a1.556,1.556,0,0,1,1.032.277,1.1,1.1,0,0,1,.322.879V-107.8a1.159,1.159,0,0,1-.3.888,1.675,1.675,0,0,1-1.107.271q-1.368,0-1.369-1.083Z",
      "transform": "translate(-17.699 -23.255)",
      "fill": "#fff"
    },
    key: 17,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_551"),
      "data-name": "Trazado 551",
      "d": "M403-109.428c0,.772-.474,1.158-1.417,1.158q-1.365,0-1.366-1.158v-15.32a1.021,1.021,0,0,1,.321-.848,1.7,1.7,0,0,1,1.07-.258,1.693,1.693,0,0,1,1.065.264,1.025,1.025,0,0,1,.326.843Z",
      "transform": "translate(-22.744 -21.625)",
      "fill": "#fff"
    },
    key: 18,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_552"),
      "data-name": "Trazado 552",
      "d": "M422.771-162.347s-.509.125-1.449.318a86.909,86.909,0,0,1-16.78,1.748,85.3,85.3,0,0,1-12.814-1.035c-1.666-.258-3.028-.517-3.969-.714s-1.446-.318-1.449-.318a.96.96,0,0,0-1.16.7.959.959,0,0,0,.7,1.16,87.193,87.193,0,0,0,18.678,2.124h.009a87.211,87.211,0,0,0,18.689-2.124.958.958,0,0,0,.7-1.16.962.962,0,0,0-1.163-.7m-8.935,6.639s-.242.078-.712.2a34.481,34.481,0,0,1-8.582,1.145h-.005a34.033,34.033,0,0,1-6.579-.68c-.844-.169-1.529-.339-2-.465s-.711-.206-.712-.206a.962.962,0,0,0-1.21.618.964.964,0,0,0,.623,1.211,35.655,35.655,0,0,0,9.876,1.443h.005a35.71,35.71,0,0,0,9.885-1.443.963.963,0,0,0,.617-1.211.961.961,0,0,0-1.208-.616m13.031-13.1c-.007,0-2.58.434-6.675.873a149.935,149.935,0,0,1-15.644.874h-.006a150.056,150.056,0,0,1-15.652-.874c-4.092-.439-6.665-.873-6.672-.873a.961.961,0,0,0-1.108.786.96.96,0,0,0,.788,1.107,153.091,153.091,0,0,0,22.64,1.776h0a152.681,152.681,0,0,0,22.643-1.776.959.959,0,0,0,.788-1.1.96.96,0,0,0-1.105-.788m1.974-6.454c-.008,0-2.606.216-6.95.434s-10.424.434-17.345.434h0c-6.923,0-13-.216-17.347-.434s-6.945-.434-6.95-.434a.961.961,0,0,0-1.037.877.958.958,0,0,0,.876,1.035c.017,0,10.531.877,24.457.877s24.439-.874,24.457-.877a.958.958,0,0,0,.877-1.035.96.96,0,0,0-1.035-.877m-48.678-4.207a.487.487,0,0,0,.08,0c.007,0,2.7-.216,7.094-.434s10.466-.435,17.2-.435h.005c6.737,0,12.815.215,17.208.434s7.086.434,7.092.434c.027,0,.052,0,.078,0a.961.961,0,0,0,.956-.883.959.959,0,0,0-.882-1.033c-.014,0-10.9-.877-24.452-.877h0c-13.553,0-24.438.874-24.452.877a.957.957,0,0,0-.88,1.033.959.959,0,0,0,.954.883m1.9-6.446a.809.809,0,0,0,.144-.011v0c.008,0,2.869-.434,7.1-.872a152.608,152.608,0,0,1,15.236-.874c5.406,0,11,.436,15.236.872s7.1.874,7.1.877a.825.825,0,0,0,.146.011.96.96,0,0,0,.948-.816.964.964,0,0,0-.806-1.095,174.155,174.155,0,0,0-22.627-1.772l-.012,0a174.165,174.165,0,0,0-22.617,1.77.96.96,0,0,0-.8,1.095.959.959,0,0,0,.948.816m4.024-6.442a1.038,1.038,0,0,0,.2-.021v0c.007,0,2.468-.517,6-1.035a87.862,87.862,0,0,1,12.262-1.038h0a88.275,88.275,0,0,1,12.265,1.038c3.529.518,5.99,1.035,6,1.035a1.025,1.025,0,0,0,.2.022.962.962,0,0,0,.938-.763.96.96,0,0,0-.742-1.137,107.67,107.67,0,0,0-18.656-2.116h-.006a107.558,107.558,0,0,0-18.649,2.116.957.957,0,0,0-.742,1.137.957.957,0,0,0,.937.764m8.872-6.622a.971.971,0,0,0,.3-.046s.243-.078.711-.206a34.508,34.508,0,0,1,8.576-1.146h.005a34.15,34.15,0,0,1,6.581.68c.845.17,1.53.341,2,.466s.708.208.709.206a.991.991,0,0,0,.3.046.963.963,0,0,0,.913-.665.959.959,0,0,0-.616-1.208h0a35.578,35.578,0,0,0-9.884-1.443,35.6,35.6,0,0,0-9.881,1.443.96.96,0,0,0-.62,1.21.96.96,0,0,0,.913.663",
      "transform": "translate(-16.942 -0.521)",
      "fill": "#fff"
    },
    key: 19,
    svg: true
  }), api_element("path", {
    attrs: {
      "id": api_scoped_id("Trazado_553"),
      "data-name": "Trazado 553",
      "d": "M397.408-171.012a2.37,2.37,0,0,1,.825-2.943,51.847,51.847,0,0,1,4.7-3.322,1.191,1.191,0,0,1,1.806.339c.458,1,1.693,4.4,2.811,7.684.33.977,1.061.937,1.528,0,6.418-12.859,13.715-24.715,20.257-31.746,1.118-1.2,1.53-1.556,2.546-1.821.993-.256,3.351-.9,5.809-1.339,1.013-.176,1.656.69.974,1.516-6.681,8.224-18.767,29.1-26.159,44.341a2.3,2.3,0,0,1-2.433,1.47c-1.293,0-5.675-.375-5.675-.375a2.036,2.036,0,0,1-2.06-1.26c-1.708-3.848-4.927-12.545-4.927-12.545",
      "transform": "translate(-21.916 0)",
      "fill": "#d10611"
    },
    key: 20,
    svg: true
  })])])]), api_element("div", stc5, [api_static_fragment($fragment1(), 23), api_element("ul", stc6, [api_element("li", stc7, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 26
  }, [api_text("Agenda tu cita")])]), api_element("li", stc8, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 28
  }, [api_text("Servico al cliente")])]), api_element("li", stc9, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 30
  }, [api_text("Oficina más cercana")])])])])]), api_element("div", stc10, [api_static_fragment($fragment2(), 33), api_element("div", stc11, [api_element("ul", stc12, [api_element("li", stc13, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 37
  }, [api_static_fragment($fragment3(), 39)])]), api_element("li", stc14, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 41
  }, [api_static_fragment($fragment4(), 43)])]), api_element("li", stc15, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 45
  }, [api_static_fragment($fragment5(), 47)])]), api_element("li", stc16, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    key: 49
  }, [api_static_fragment($fragment6(), 51)])])]), api_static_fragment($fragment7(), 53)])])]), api_element("section", stc17, [api_static_fragment($fragment8(), 56), api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 57
  }, [api_text("Defensor del consumidor financiero")]), api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#")
    },
    key: 58
  }, [api_text("Tratamiento de datos personales")])])])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "example-app_app"
}
freezeTemplate(tmpl);