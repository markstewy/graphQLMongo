query x ($paid: Boolean, $wantZip:Boolean!, $wantName: Boolean!) {
  getUsers(paid: $paid) {
		_id,
    name @skip(if: $wantName),
    zipCode @include(if: $wantZip)
  }
}


