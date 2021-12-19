import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ServerConfigForm({dispatch}) {

return <form>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon3">
        PIRDS data server url:
      </span>
    </div>
    <input
      type="text"
      class="form-control"
      id="dserverurl"
      aria-describedby="basic-addon3"
    />

    <div class="input-group-append">
      <a
        class="btn btn-outline-dark btn-sm"
        href="#"
        role="button"
        id="useofficial"
      >
        Use Ventmon Data Lake: ventmon.coslabs.com
      </a>
    </div>
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon3">
        Trace ID:
      </span>
    </div>
    <input
      type="text"
      class="form-control"
      id="traceid"
      aria-describedby="basic-addon3"
    />
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" for="samples_to_plot">
        Number of Samples (~10s per 15000 samples):
      </span>
    </div>
    <input
      type="text"
      class="form-control"
      id="samples_to_plot"
      aria-describedby="samples_to_plot"
    />
  </div>

  <div>
    <label for="livetoggle">Plot Live:</label>
    <label class="switch">
      <input type="checkbox" id="livetoggle" checked />
      <span class="slider round"></span>
    </label>
    <label for="displaytoggle">Clinical Display:</label>
    <label class="switch">
      <input type="checkbox" id="displaytoggle" />
      <span class="slider round"></span>
    </label>
  </div>
</form>
}
