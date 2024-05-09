import {
    LitElement,
    html,
    css,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'

export class CustomButton extends LitElement {
    static styles = css`
        .button {
            /* Layout */
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.25rem;
            /* Spacing */
            padding-block: var(--_py, 0.5rem);
            padding-inline: var(--_px, 0.5rem);
            /* Typography */
            font-size: var(--_fs, 1rem);
            font-weight: 500;
            /* Colors */
            color: var(--_color, var(--white));
            background-color: var(--_bg-color, var(--neutral-900));
            /* Others */
            border-radius: 0.25rem;
            border: transparent;
            cursor: pointer;

            &:focus-visible {
                outline: 4px solid rgba(68, 76, 231, 0.12);
            }

            &:disabled {
                --_bg-color: var(--bg-disabled) !important;
                --_color: var(--text-disabled) !important;
                box-shadow: none !important;
                cursor: not-allowed;
            }

            /***********/
            /*   Size  */
            /***********/
            &[data-size='sm'] {
                --_px: 0.5rem;
                --_py: 0.5rem;
                --_fs: var(--text-sm);
            }

            &[data-size='md'] {
                --_px: 0.875rem;
                --_py: 0.625rem;
                --_fs: var(--text-sm);
                line-height: 1.25rem;
            }

            &[data-size='lg'] {
                --_px: 1.125rem;
                --_py: 0.625rem;
                --_fs: var(--text-base);
                line-height: 1.5rem;
            }

            &[data-size='xl'] {
                --_px: 1.25rem;
                --_py: 0.75rem;
                --_fs: var(--text-base);
                line-height: 1.5rem;
            }

            &[data-size='2xl'] {
                --_px: 1.625rem;
                --_py: 1rem;
                --_fs: var(--text-lg);
                line-height: 1.75rem;
            }

            /***********/
            /* variant */
            /***********/
            &[data-variant='primary'] {
                --_bg-color: var(--brand-primary);
                --_color: var(--text-primary-invert);

                &:active {
                    --_bg-color: var(--brand-primary-focus);
                }
            }

            &[data-variant='secondary'] {
                --_bg-color: var(--white);
                --_color: var(--text-primary);
                outline: var(--_border-size, 1px) solid var(--neutral-200);
                box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.1);

                &:hover {
                    --_color: var(--text-primary-hover);
                }

                &:active {
                    --_bg-color: var(--brand-secondary-focus);
                }
            }

            &[data-variant='tertiary'] {
                --_bg-color: transparent;
                --_color: var(--text-tertiary);

                &:active {
                    --_bg-color: var(--bg-primary-hover);
                }

                &:disabled {
                    --_bg-color: transparent !important;
                }
            }

            &[data-variant='link-color'] {
                --_px: 0rem;
                --_py: 0rem;
                --_bg-color: transparent;
                --_color: var(--text-tertiary);

                &:hover {
                    --_color: var(--brand-primary-emphasize);
                }

                &:focus-visible {
                    --_bg-color: var(--bg-primary-hover);
                }

                &:active {
                    --_bg-color: var(--bg-link-focus);
                }

                &:disabled {
                    --_bg-color: transparent !important;
                }
            }

            &[data-variant='link-gray'] {
                --_px: 0rem;
                --_py: 0rem;
                --_bg-color: transparent;
                --_color: var(--text-secondary);

                &:hover {
                    --_color: var(--text-primary);
                }

                &:active {
                    --_bg-color: var(--bg-link-focus);
                }

                &:disabled {
                    --_bg-color: transparent !important;
                }
            }

            &[data-variant='destructive'] {
                --_bg-color: var(--bg-error);
                --_color: var(--text-primary-invert);

                &:focus-visible {
                    outline: 4px solid rgba(217, 45, 32, 0.12);
                }

                &:active {
                    --_bg-color: var(--bg-error-emphasize);
                }
            }
        }

        .button[data-icon-only] {
            display: grid;
            place-items: center;
            aspect-ratio: 1;
        }
    `

    static properties = {
        buttonText: { type: String },
        variant: { type: String },
        size: { type: String },
        disabled: { type: Boolean },
        iconOnly: { type: Boolean },
        iconLeft: { type: Boolean },
        iconRight: { type: Boolean },
    }

    constructor() {
        super()
        this.buttonText = 'Button CTA'
        this.variant = 'primary'
        this.size = 'sm'
        this.iconOnly = false
        this.iconLeft = false
        this.iconRight = false
        this.disabled = false
    }

    render() {
        const iconOnlyTemplate = html`<svg
            class="button__icon"
            style="width:var(--_svg-w, 1rem); height:var(--_svg-h, 1rem);"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path
                d="M8.00042 12.3472L3.10219 15.089L4.19617 9.58326L0.0749245 5.77208L5.64926 5.11115L8.00042 0.0138855L10.3515 5.11115L15.9258 5.77208L11.8047 9.58326L12.8986 15.089L8.00042 12.3472ZM8.00042 10.7556L10.9495 12.4063L10.2908 9.09145L12.7722 6.7968L9.41597 6.39884L8.00042 3.32987L6.58482 6.39884L3.22862 6.7968L5.70994 9.09145L5.05127 12.4063L8.00042 10.7556Z"
                fill="currentColor"
            />
        </svg>`

        const buttonTemplate = html`
            ${this.iconLeft
                ? html`
                      <svg
                          class="button__icon-left"
                          style="width:var(--_svg-w, 1rem); height:var(--_svg-h, 1rem);"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                      >
                          <path
                              d="M8.00042 12.3472L3.10219 15.089L4.19617 9.58326L0.0749245 5.77208L5.64926 5.11115L8.00042 0.0138855L10.3515 5.11115L15.9258 5.77208L11.8047 9.58326L12.8986 15.089L8.00042 12.3472ZM8.00042 10.7556L10.9495 12.4063L10.2908 9.09145L12.7722 6.7968L9.41597 6.39884L8.00042 3.32987L6.58482 6.39884L3.22862 6.7968L5.70994 9.09145L5.05127 12.4063L8.00042 10.7556Z"
                              fill="currentColor"
                          />
                      </svg>
                  `
                : ''}

            <span class="button__text">${this.buttonText}</span>

            ${this.iconRight
                ? html`<svg
                      class="button__icon-left"
                      style="width:var(--_svg-w, 1rem); height:var(--_svg-h, 1rem);"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                  >
                      <path
                          d="M8.00042 12.3472L3.10219 15.089L4.19617 9.58326L0.0749245 5.77208L5.64926 5.11115L8.00042 0.0138855L10.3515 5.11115L15.9258 5.77208L11.8047 9.58326L12.8986 15.089L8.00042 12.3472ZM8.00042 10.7556L10.9495 12.4063L10.2908 9.09145L12.7722 6.7968L9.41597 6.39884L8.00042 3.32987L6.58482 6.39884L3.22862 6.7968L5.70994 9.09145L5.05127 12.4063L8.00042 10.7556Z"
                          fill="currentColor"
                      />
                  </svg>`
                : ''}
        `

        return html`
            <button
                class="button"
                data-variant=${this.variant}
                data-size=${this.size}
                ?data-icon-left=${this.iconLeft}
                ?data-icon-right=${this.iconRight}
                ?data-icon-only=${this.iconOnly}
                ?disabled=${this.disabled}
            >
                ${this.iconOnly ? iconOnlyTemplate : buttonTemplate}
            </button>
        `
    }
}
customElements.define('custom-button', CustomButton)
