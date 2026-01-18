import { type Component, createApp } from "vue";



export function VueSheetV2Mixin<BaseT extends AbstractConstructorOf<fa.api.ApplicationV2> & {
        DEFAULT_OPTIONS: DeepPartial<fa.ApplicationConfiguration>;
    }>(Base: BaseT) {
  abstract class VueSheetV2 extends Base {
    static vueComponent: Component;
    #vueApp: ReturnType<typeof createApp> | null = null;
    #root: HTMLElement | null = null;

    protected override async _prepareContext(options: fa.api.DocumentSheetRenderOptions) {
      const data = await super._prepareContext(options);
      return {
        ...data,
      };
    }

    protected override async _renderHTML(context: any, options: fa.api.DocumentSheetRenderOptions) {
      this.#root = document.createElement("div");
      const Component = (this.constructor as typeof VueSheetV2).vueComponent as Component;
      this.#vueApp = createApp(Component, {
        options,
        context,
      });

      this.#vueApp.mount(this.#root);

      return this.#root;
    }

    protected override async _onClose(options: fa.ApplicationClosingOptions) {
      if (this.#vueApp) {
        this.#vueApp.unmount();
        this.#vueApp = null;
      }
      super._onClose(options);
    }

    async _replaceHTML(result: HTMLElement, content: HTMLElement, options: any) {
      result.replaceWith(content);
    }
  };

  return VueSheetV2;
};
