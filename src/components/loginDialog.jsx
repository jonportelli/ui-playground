import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/button/dist/mdc.button.css";

export const LoginForm = props => {
  return (
    <React.Fragment>
      <TextField
        icon="person"
        label="E-Mail"
        pattern='(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))'
      />

      <TextField
        icon="fingerprint"
        label="Password"
        pattern=".{8,}"
        type="password"
      />
    </React.Fragment>
  );
};

export const LoginDialog = props => {
  return (
    <Elevation z={2} key={2}>
      <Card style={{ width: "21rem" }}>
        <Typography
          use="subtitle1"
          tag="div"
          style={{ padding: "0.5rem 1rem" }}
          theme="textSecondaryOnBackground"
        >
          Enter the DATARAMA
        </Typography>

        <ListDivider />
        <LoginForm />

        <CardActions>
          <CardActionButton icon="person_add" label="Register" />
          <CardActionIcons>
            <CardActionButton label="Sign In" trailingIcon="arrow_forward" />
          </CardActionIcons>
        </CardActions>
      </Card>
    </Elevation>
  );
};
