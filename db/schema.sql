-- TODO:
-- * Do we want a `participants.updated_at` column and add a UPDATE trigger?
-- * Are Teams user IDs the same as Graph user IDs?
-- * Add unique constraints to UUIDs

DROP TABLE IF EXISTS standups_participants;
DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS standups;

CREATE TABLE participants (
    id SERIAL PRIMARY KEY NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    -- We do not delete participants from the table, so we can ensure that
    -- participants do not get matched up again in the future.
    enrolled BOOLEAN NOT NULL DEFAULT TRUE,
    -- Cached version of the participant's Teams User GUID so the bot can reach
    -- out to the participant when having matched them.
    teams_id UUID NOT NULL
);

CREATE TABLE standups (
    id SERIAL PRIMARY KEY NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE standups_participants (
    participant_id INT NOT NULL,
    standup_id INT NOT NULL,
    CONSTRAINT participant_fk
      FOREIGN KEY(participant_id)
	    REFERENCES participants(id)
      ON DELETE CASCADE,
    CONSTRAINT standup_fk
      FOREIGN KEY(standup_id)
	    REFERENCES standups(id)
      ON DELETE CASCADE
);
