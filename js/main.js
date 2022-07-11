;(() => {
	var e = {
			765: () => {
				var e, t
				;(e = document.querySelector('.about')),
					(t = document.querySelector('.about__tabs')).addEventListener('click', function () {
						if (event.target.classList.contains('tab__item') && !event.target.classList.contains('_active')) {
							var o = event.target.getAttribute('data-target')
							t.querySelector('._active').classList.remove('_outer-shadow', '_active'),
								event.target.classList.add('_active', '_outer-shadow'),
								e.querySelector('.tab__content._active').classList.remove('_active'),
								e.querySelector(o).classList.add('_active')
						}
					})
			},
			190: () => {
				var e = document.querySelectorAll('[data-lang-ru], [data-lang-en]'),
					t = document.querySelectorAll('[data-text]'),
					o = document.querySelectorAll('[data-placeholder-lang-en]'),
					n = document.querySelectorAll('[data-heading]'),
					a = document.querySelector('.style__lang')
				function c() {
					'ru' === localStorage.getItem('lang')
						? t.forEach(function (e) {
								e.setAttribute('data-text', e.getAttribute('data-text-lang-ru'))
						  })
						: t.forEach(function (e) {
								e.setAttribute('data-text', e.getAttribute('data-text-lang-en'))
						  }),
						'ru' === localStorage.getItem('lang')
							? o.forEach(function (e) {
									e.placeholder = e.getAttribute('data-placeholder-lang-ru')
							  })
							: o.forEach(function (e) {
									e.placeholder = e.getAttribute('data-placeholder-lang-en')
							  }),
						'ru' === localStorage.getItem('lang')
							? n.forEach(function (e) {
									e.setAttribute('data-heading', e.getAttribute('data-heading-lang-ru'))
							  })
							: n.forEach(function (e) {
									e.setAttribute('data-heading', e.getAttribute('data-heading-lang-en'))
							  })
				}
				null === localStorage.getItem('lang') || ('ru' !== localStorage.getItem('lang') && 'en' !== localStorage.getItem('lang'))
					? (localStorage.setItem('lang', 'en'),
					  e.forEach(function (e) {
							e.innerHTML = e.getAttribute('data-lang-en')
					  }),
					  c())
					: ('en' === localStorage.getItem('lang')
							? e.forEach(function (e) {
									e.innerHTML = e.getAttribute('data-lang-en')
							  })
							: e.forEach(function (e) {
									e.innerHTML = e.getAttribute('data-lang-ru')
							  }),
					  c()),
					a.addEventListener('click', function () {
						'en' === localStorage.getItem('lang') ? localStorage.setItem('lang', 'ru') : localStorage.setItem('lang', 'en'),
							'ru' === localStorage.getItem('lang')
								? e.forEach(function (e) {
										e.innerHTML = e.getAttribute('data-lang-ru')
								  })
								: e.forEach(function (e) {
										e.innerHTML = e.getAttribute('data-lang-en')
								  }),
							c()
					})
			},
			755: () => {
				!(function () {
					document.querySelectorAll('.section').forEach(function (e) {
						e.classList.contains('_active') || e.classList.add('_hide')
					})
					var e = document.querySelector('.header__hamburger-btn'),
						t = document.querySelector('.nav-menu'),
						o = t.querySelector('.nav-menu__close')
					function n() {
						t.classList.remove('_open'), a(), c()
					}
					function a() {
						document.querySelector('.fade-out-effect').classList.add('_active'),
							setTimeout(function () {
								document.querySelector('.fade-out-effect').classList.remove('_active')
							}, 300)
					}
					function c() {
						document.body.classList.toggle('_no-scroll')
					}
					e.addEventListener('click', function () {
						t.classList.add('_open'),
							c(),
							document.querySelector('.style').classList.contains('_open') && document.querySelector('.style').classList.remove('_open')
					}),
						o.addEventListener('click', n),
						document.addEventListener('click', function (e) {
							if (e.target.classList.contains('link__item') && '' != e.target.hash) {
								e.preventDefault()
								var o = e.target.hash
								document.querySelector('.section._active').classList.add('_hide'),
									document.querySelector('.section._active').classList.remove('_active'),
									document.querySelector(o).classList.add('_active'),
									document.querySelector(o).classList.remove('_hide'),
									t.classList.contains('_open')
										? (t.querySelector('._active').classList.remove('_active'), e.target.classList.add('_active'), n())
										: t.querySelectorAll('.link__item').forEach(function (e) {
												o === e.hash && (t.querySelector('._active').classList.remove('_active'), e.classList.add('_active'))
										  }),
									a(),
									(window.location.hash = o),
									document.querySelector('.style').classList.contains('_open') &&
										document.querySelector('.style').classList.remove('_open')
							}
						})
				})()
			},
			610: () => {
				!(function () {
					var e,
						t,
						o,
						n = document.querySelector('.portfolio__filter'),
						a = document.querySelector('.portfolio__items-container'),
						c = document.querySelectorAll('.portfolio__item'),
						i = document.querySelector('.portfolio__popup'),
						r = document.querySelector('.popup__prev'),
						s = document.querySelector('.popup__next'),
						l = document.querySelector('.popup__close'),
						d = document.querySelector('.portfolio__block'),
						u = i.querySelector('.popup__details'),
						m = i.querySelector('.popup__project-datails-btn')
					function v() {
						i.classList.contains('_open')
							? i.classList.remove('_open')
							: (i.classList.add('_open'),
							  document.querySelector('.style').classList.contains('_open') &&
									document.querySelector('.style').classList.remove('_open')),
							document.body.classList.toggle('_no-scroll')
					}
					function _() {
						var e = o[t],
							n = i.querySelector('.popup__img')
						i.querySelector('.popup__loader').classList.add('_active'),
							(n.src = e),
							(n.onload = function () {
								i.querySelector('.popup__loader').classList.remove('_active')
							}),
							(i.querySelector('.popup__counter').innerHTML = t + 1 + ' of ' + o.length)
					}
					function f() {
						u.classList.contains('_active')
							? (m.querySelector('i').classList.remove('fa-minus'),
							  m.querySelector('i').classList.add('fa-plus'),
							  u.classList.remove('_active'),
							  (u.style.maxHeight = '0px'))
							: (m.querySelector('i').classList.remove('fa-plus'),
							  m.querySelector('i').classList.add('fa-minus'),
							  u.classList.add('_active'),
							  (u.style.maxHeight = u.scrollHeight + 'px'),
							  i.scrollTo(0, u.offsetTop))
					}
					n.addEventListener('click', function (e) {
						if (e.target.classList.contains('filter__item') && !e.target.classList.contains('_active')) {
							n.querySelector('._active').classList.remove('_outer-shadow', '_active'), e.target.classList.add('_active', '_outer-shadow')
							var t = e.target.getAttribute('data-target')
							c.forEach(function (e) {
								t === e.getAttribute('data-category') || 'all' === t
									? (e.classList.remove('_hide'), e.classList.add('_show'), d.classList.remove('_show'))
									: 'mobile-app' === t
									? (d.classList.add('_show'), e.classList.remove('_show'), e.classList.add('_hide'))
									: (e.classList.remove('_show'), e.classList.add('_hide'))
							})
						}
					}),
						a.addEventListener('click', function (n) {
							if (n.target.closest('.item__inner')) {
								var a = n.target.closest('.item__inner').parentElement
								;(e = Array.from(a.parentElement.children).indexOf(a)),
									1 === (o = (o = c[e].querySelector('.item__img img').getAttribute('data-screenshots')).split(',')).length
										? ((r.style.display = 'none'), (s.style.display = 'none'))
										: ((r.style.display = 'block'), (s.style.display = 'block')),
									(t = 0),
									v(),
									_(),
									(function () {
										if (c[e].querySelector('.item__details')) {
											m.style.display = 'block'
											var t = c[e].querySelector('.item__details').innerHTML
											i.querySelector('.popup__project-details').innerHTML = t
											var o = c[e].querySelector('.item__title').innerHTML
											i.querySelector('.popup__title h2').innerHTML = o
											var n = c[e].getAttribute('data-category')
											;(i.querySelector('.popup__project-category').innerHTML = n),
												(i.querySelector('.popup__project-category').innerHTML = n.split('-').join(' '))
										} else m.style.display = 'none'
									})()
							}
						}),
						l.addEventListener('click', function () {
							v(), u.classList.contains('_active') && f()
						}),
						s.addEventListener('click', function () {
							t === o.length - 1 ? (t = 0) : t++, _()
						}),
						r.addEventListener('click', function () {
							0 === t ? (t = o.length - 1) : t--, _()
						}),
						m.addEventListener('click', function () {
							f()
						})
				})()
			},
			904: () => {
				window.addEventListener('load', function () {
					document.querySelector('.preload').classList.add('_fade-out'),
						setTimeout(function () {
							document.querySelector('.preload').style.display = 'none'
						}, 600)
				})
			},
			598: () => {
				function e(e) {
					var t = !0,
						o = !1,
						n = null,
						a = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							'datetime-local': !0
						}
					function c(e) {
						return !!(
							e &&
							e !== document &&
							'HTML' !== e.nodeName &&
							'BODY' !== e.nodeName &&
							'classList' in e &&
							'contains' in e.classList
						)
					}
					function i(e) {
						e.classList.contains('focus-visible') || (e.classList.add('focus-visible'), e.setAttribute('data-focus-visible-added', ''))
					}
					function r(e) {
						t = !1
					}
					function s() {
						document.addEventListener('mousemove', l),
							document.addEventListener('mousedown', l),
							document.addEventListener('mouseup', l),
							document.addEventListener('pointermove', l),
							document.addEventListener('pointerdown', l),
							document.addEventListener('pointerup', l),
							document.addEventListener('touchmove', l),
							document.addEventListener('touchstart', l),
							document.addEventListener('touchend', l)
					}
					function l(e) {
						;(e.target.nodeName && 'html' === e.target.nodeName.toLowerCase()) ||
							((t = !1),
							document.removeEventListener('mousemove', l),
							document.removeEventListener('mousedown', l),
							document.removeEventListener('mouseup', l),
							document.removeEventListener('pointermove', l),
							document.removeEventListener('pointerdown', l),
							document.removeEventListener('pointerup', l),
							document.removeEventListener('touchmove', l),
							document.removeEventListener('touchstart', l),
							document.removeEventListener('touchend', l))
					}
					document.addEventListener(
						'keydown',
						function (o) {
							o.metaKey || o.altKey || o.ctrlKey || (c(e.activeElement) && i(e.activeElement), (t = !0))
						},
						!0
					),
						document.addEventListener('mousedown', r, !0),
						document.addEventListener('pointerdown', r, !0),
						document.addEventListener('touchstart', r, !0),
						document.addEventListener(
							'visibilitychange',
							function (e) {
								'hidden' === document.visibilityState && (o && (t = !0), s())
							},
							!0
						),
						s(),
						e.addEventListener(
							'focus',
							function (e) {
								var o, n, r
								c(e.target) &&
									(t ||
										((n = (o = e.target).type),
										('INPUT' === (r = o.tagName) && a[n] && !o.readOnly) ||
											('TEXTAREA' === r && !o.readOnly) ||
											o.isContentEditable)) &&
									i(e.target)
							},
							!0
						),
						e.addEventListener(
							'blur',
							function (e) {
								var t
								c(e.target) &&
									(e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) &&
									((o = !0),
									window.clearTimeout(n),
									(n = window.setTimeout(function () {
										o = !1
									}, 100)),
									(t = e.target).hasAttribute('data-focus-visible-added') &&
										(t.classList.remove('focus-visible'), t.removeAttribute('data-focus-visible-added')))
							},
							!0
						),
						e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
							? e.host.setAttribute('data-js-focus-visible', '')
							: e.nodeType === Node.DOCUMENT_NODE &&
							  (document.documentElement.classList.add('js-focus-visible'),
							  document.documentElement.setAttribute('data-js-focus-visible', ''))
				}
				if ('undefined' != typeof window && 'undefined' != typeof document) {
					var t
					window.applyFocusVisiblePolyfill = e
					try {
						t = new CustomEvent('focus-visible-polyfill-ready')
					} catch (e) {
						;(t = document.createEvent('CustomEvent')).initCustomEvent('focus-visible-polyfill-ready', !1, !1, {})
					}
					window.dispatchEvent(t)
				}
				'undefined' != typeof document && e(document)
			}
		},
		t = {}
	function o(n) {
		var a = t[n]
		if (void 0 !== a) return a.exports
		var c = (t[n] = { exports: {} })
		return e[n](c, c.exports, o), c.exports
	}
	;(() => {
		'use strict'
		o(598), window, document, document.documentElement, document.body, o(904), o(765), o(610), o(755), o(190)
	})()
})()
