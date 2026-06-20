import Renderer, { RendererParameters } from "../common/Renderer.js";
import { WebGPUBackendParameters } from "./WebGPUBackend.js";

export interface WebGPUOnlyRendererParameters extends RendererParameters, WebGPUBackendParameters {}

declare class WebGPUOnlyRenderer extends Renderer {
    readonly isWebGPURenderer: true;

    constructor(parameters?: WebGPUOnlyRendererParameters);
}

export default WebGPUOnlyRenderer;
