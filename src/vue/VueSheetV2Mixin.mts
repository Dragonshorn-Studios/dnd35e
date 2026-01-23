import { type Component, createApp } from "vue";

export function VueSheetV2Mixin<BaseT extends AbstractConstructorOf<fa.api.ApplicationV2> & {
        DEFAULT_OPTIONS: DeepPartial<fa.ApplicationConfiguration>;
    }>(Base: BaseT) {
  abstract class VueSheetV2 extends Base {
    vueApp: ReturnType<typeof createApp> | null = null;
    root: HTMLElement | null = null;

    static get vueComponent(): Component { throw new Error("Not implemented"); }

    // protected override async _prepareContext(options: fa.api.DocumentSheetRenderOptions) {
    //   const data = await super._prepareContext(options);
    //   return {
    //     ...data,
    //   };
    // }

    // protected override async _renderHTML(context: any, options: fa.api.DocumentSheetRenderOptions) {
    //   this.root = document.createElement("div");
      
    //   const Component = (this as any).constructor.vueComponent;
      
    //   // this.vueApp = createApp(Component, {
    //   //   options,
    //   //   context,
    //   // });

    //   // this.vueApp.mount(this.root);
    //   try {
    //     this.vueApp = createApp(Component, { context, options });
    //     this.vueApp.mount(this.root!);
    //   } catch (err) {
    //     console.error("Vue mount failed:", err);
    //     console.error((err as any)?.stack);
    //     throw err;
    //   }


    //   return this.root;
    // }
    // protected override async _onRender(context: any, options: any) {
    //   super._onRender(context, options);

    //   // Tell Vue that the sheet is now actually in the DOM
    //   this.vueApp?.config.globalProperties.$resolveRendered();
    // }


    // protected override async _renderFrame(options: any) {
    //   const frame = await super._renderFrame(options);

    //   // Create a container inside the frame for Vue
    //   this.root = document.createElement("div");
    //   this.root.classList.add("vue-root");

    //   // Insert Vue root into the frame
    //   frame.querySelector(".window-content")?.replaceChildren(this.root);

    //   return frame;
    // }

    // protected override async _renderHTML(context: any, options: any) {
    //   const Component = (this as any).constructor.vueComponent;

    //   this.vueApp = createApp(Component, { context, options });
    //   let resolveRender!: (value: unknown) => void;

    //   this.vueApp.config.globalProperties.$whenRendered = new Promise(res => {
    //     resolveRender = res;
    //   });

    //   this.vueApp.config.globalProperties.$resolveRendered = resolveRender;

    //   this.vueApp.mount(this.root!);

    //   // Return an empty fragment so Foundry doesn't try to inject anything
    //   return document.createElement("div");
    // }

    // protected override async _replaceHTML(_frame: HTMLElement, _html: HTMLElement, _options: any) {
    //   // Do nothing — Vue already controls the DOM
    // }
    // protected override async _renderHTML(
    //   context: any,
    //   options: fa.api.DocumentSheetRenderOptions,
    // ): Promise<HTMLElement> {
    //   // Just return a container; Foundry will pass it back as `content` to _replaceHTML
    //   this.root = document.createElement("div");
    //   return this.root;
    // }

    protected override async _replaceHTML(
      result: any,
      content: HTMLElement,
      options: fa.ApplicationRenderOptions,
    ): Promise<void> {
      // Sync any state if you want, like PF2e does
      // Object.assign(this.$state, result.state);

      if (options.isFirstRender) {
        const Component = (this as any).constructor.vueComponent;

        this.vueApp = createApp(Component, {
          context: { ...result, renderOptions: options },
          options,
          // state: this.$state, // if you mirror PF2e’s pattern
        });

        // Mount Vue into the live `.window-content` container
        this.vueApp.mount(content);
      } else {
        // On subsequent renders you can just update props/state instead of remounting
        Object.assign(this.vueApp?._instance?.proxy?.$props ?? {}, { context: { ...result, renderOptions: options } });
      }
    }

      protected override async _renderHTML(
          context: any,
      ) {
          return context;
      }

    protected override async _onClose(options: fa.ApplicationClosingOptions) {
      if (this.vueApp) {
        this.vueApp.unmount();
        this.vueApp = null;
      }
      super._onClose(options);
    }
  };

  return VueSheetV2;
};
